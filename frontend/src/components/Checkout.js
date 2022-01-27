import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import '../components/CSS/Checkout.css';
export default function Checkout(props) {
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems;
  const subTotal = cartItems.reduce((x, item) => x + item.totalPrice, 0);
  const gst = 0.05 * subTotal;
  const ordTotal = subTotal + gst
  return (
    <div className='checkout-div'>
      <br/>
      <Container>
        <Row>
          <Col>
            <div className='shipping-details'>
              <h3>Shipping Details</h3>
              <h5>Name :{props.fullName}</h5>
              <h5>Address:{props.address}</h5>
            </div>
            <br />
            <div className='payment-details'>
              <h3>Payment Details</h3>
              <h5>Method :</h5>
            </div>
            <br />
            <div className='order-details'>
              <h3>Order Details</h3>
              <Row>
                <table>
                  <tr>
                    <th className='order-heading'>Product Image</th>
                    <th className='order-heading'>Product Name</th>
                    <th className='order-heading'>Product Price</th>
                  </tr>
                  {
                    cartItems.map((item) => <>
                      <tr>
                        <td>
                          <img
                            alt={item.productName}
                            src={item.productImage}
                            style={{ width: "100px", height: "100px", marginTop: "34px" }} />
                        </td>
                        <td>
                          <h5>{item.productName}</h5>
                        </td>
                        <td>
                          <h5>{item.quantity} x {item.productCost} =  {" "} {item.totalPrice}</h5>
                        </td>
                      </tr>

                    </>)
                  }
                </table>
              </Row>
            </div>
            <br />
          </Col>
          <Col>
            <div className="order-summary">
              <h3>Order Summary</h3>
              <Row>
                <h5 style={{ marginLeft: "30px", marginTop: "30px" }}>SubTotal</h5>
                <h5 style={{ marginLeft: "30px", marginTop: "30px" }}> Rs : {subTotal} /- </h5>
              </Row>
              <hr />

              <Row>
                <h5 style={{ marginLeft: "30px" }}>GST(5%)</h5>
                <h5 style={{ marginLeft: "30px" }}>Rs : {gst} /- </h5>
              </Row>
              <hr />
              <Row>
                <h5 style={{ marginLeft: "30px" }}>Order Total</h5>
                <h5 style={{ marginLeft: "30px" }}>Rs : {ordTotal} /- </h5>
              </Row>
              <br/>
              <Row>
                <Link to="/placeOrder"><Button variant="outline-secondary" className='order-button'>Place Order</Button></Link>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}




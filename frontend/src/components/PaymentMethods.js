import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../components/CSS/PaymentMethods.css';
import Annoucement from './Annoucement';
export default function PaymentMethods() {
    const history= useHistory();
    const handleCheckout=()=>{
        history.push('/checkout')
    }
    return (
        <div className='payment-div'>
            <br/>
            <Annoucement/>
            <br/>
            <Container>
                <Row>
                    <Col>
                        <h3>PAYMENT METHODS</h3>
                        <br/><br/><br/><br/>
                        <form>
                            <div className='form-group'>
                                    <input type="radio" name="payment" value="card"/>
                                    <label> Net Banking/Credit Card/ Debit Card</label>
                                    <br/><br/>
                                    <input type="radio" name="payement" value="cash"/>
                                    <label> Cash On Delivery</label>
                            </div>
                            <button className='btn btn-danger' type='submit' onClick={handleCheckout}>Continue</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

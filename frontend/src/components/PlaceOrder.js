import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import '../components/CSS/PlaceOrder.css';
const PlaceOrderDiv =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(0, 132, 255);
    padding: 25px;
`;
const Heading = styled. h1`
    color: white;
    text-decoration: underline;
    font-weight: bold;
    text-align: center;
`;
const CheckOrder = styled.div`
    color: lightyellow;
    border: 2px dotted darkblue;
    padding: 20px;
`;
const ButtonOrder = styled.button`
    height: 50px;
    width: 200px;
    background-color: lightyellow;
    border-radius: 20px 0px 20px 0px;
    margin-top: 50px;
    margin-left: 160px;
    color: darkred;
    font-weight: bolder;
`;
export default function PlaceOrder() {
  return (
    <PlaceOrderDiv>
        <Heading>THANK YOU FOR SHOPPING WITH US...</Heading>
        <Container>
            <br/>
            <Row>
                <Col sm={6}>
                    <iframe src="https://giphy.com/embed/pIj4Yg3dudUddwGbHO" width="480" height="540" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                </Col>
                <Col sm={6}>
                    <CheckOrder>
                        <h4>You can check the order details by clicking this button...</h4>
                        <br/>
                        <Link to="/orders"><ButtonOrder>
                            ORDER DETAILS
                        </ButtonOrder></Link>
                    </CheckOrder>
                </Col>
            </Row>
        </Container>
    </PlaceOrderDiv>
  );
}

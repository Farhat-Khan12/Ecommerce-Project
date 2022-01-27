import React from 'react';
//import Myaccount from './Myaccount';
import ReusableAccPage from './ReusableAccPage';
import {Col,Row, Container} from 'react-bootstrap';

const Profile = () => {
    return (
        <div>
            {/* <Myaccount /> */}
            <Container>
            <Row>
            <Col md= {4}>
            <ReusableAccPage />
            </Col>

            <Col md={8}>
            My Profle
            </Col>
            </Row>
            </Container>
           
        </div>
    )
}

export default Profile

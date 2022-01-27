import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import '../components/CSS/Footer.css';
import TermsAndConditions from '../Documents/TermsAndConditions.pdf';
//import { Facebook, Instagram, Pinterest, Twitter, WhatsApp } from '@material-ui/icons';
//import styled from 'styled-components';
// const SocialContainer = styled.div`
//     display: flex;
// `;

// const SocialIcon = styled.div`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     color: white;
//     background-color: #${props=>props.color};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 20px;
// `;
export default function Footer() {
    const history = useHistory();
    // const thank_func = e => {
    //     e.preventDefault()
    //     // navigate(-1);
    //     navigate("/subscribe")
    //   }
    const [emailErr, setEmailErr] = useState({});
    const [email, setEmail] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();

        if (isValid) {
            setEmail(" ");
            history.push("/subscribe")
        }
    }
    const formValidation = () => {
        const emailErr = {};
        let isValid = true;

        if (!email.includes('.')) {
            emailErr.Email = "Provide Valid Email Id containing .";
            isValid = false;
        }

        if (!email.includes('@')) {
            emailErr.Email = "Enter a valid Email Id containing @";
            isValid = false;
        }

        if (email.trim().length < 1) {
            emailErr.Email = "Please Provide Email Id";
            isValid = false;
        }

        setEmailErr(emailErr);
        return isValid;
    }
    return (
        <div className='main-footer-div'>
            <Container>
                <Row>
                    <Col sm>
                        <h4>About Company</h4>
                        <p>NeoSoft Technologies</p>
                        <p>Contact Information</p>
                        <p>Email : neosoft@neosoftmail.com</p>
                        <p>Contact Number: 1234567890</p>
                        <p>Mumbai, INDIA</p>
                    </Col>
                    <Col sm>
                        <h4>Information</h4>
                        <a className='footer_items' href={TermsAndConditions} target="_blank"><p>Terms and Conditions</p></a>
                        <p>Product Guarantee</p>
                        <p>Return Policy</p>
                        <p>Contact Us</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col sm>
                        <h4>Newsletter</h4>
                        <p>Sign In to get the inclusive offers on our latest and exclusive products.</p>
                        <p>And get a instant discount and vouchers.</p>
                        <form onSubmit={onSubmit}>
                            <input type="text" placeholder='Enter Email...' value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            {Object.keys(emailErr).map((key) => {
                                return (
                                    <div style={{ color: "red" }}>
                                        {emailErr[key]}
                                    </div>
                                )
                            })}
                            <button className="btn btn-secondary" type="submit">Subscribe</button>
                        </form>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <div className='copyright'>
                    {/* <SocialContainer>
                        <SocialIcon color="3B5999">
                            <Facebook />
                        </SocialIcon>
                        <SocialIcon color="FF7F50">
                            <Instagram />
                        </SocialIcon >
                        <SocialIcon color="55ACEE">
                            <Twitter />
                        </SocialIcon >
                        <SocialIcon color="E60023">
                            <Pinterest />
                        </SocialIcon >
                        <SocialIcon color="32CD32">
                            <WhatsApp />
                        </SocialIcon>
                    </SocialContainer> */}
                    <p>Copyright © 2021. Farhat Khan. All rights reserved</p>
                </div>
            </Container>
        </div>
    );
}

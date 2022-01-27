import React, { useState, useEffect } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
//import { FaGooglePlusG } from 'react-icons/fa';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../reducer/UserContext';
import { useContext } from 'react';
import GoogleLogin from 'react-google-login';
import '../components/CSS/Login.css';
import Annoucement from './Annoucement';
const Login = () => {

    const { state, dispatch } = useContext(UserContext);

    const history = useHistory();
    const [emailAddress, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => { }, [emailAddress, password]);
    // console.log(emailAddress);
    // console.log(password);


    const loginUser = async (e) => {
        e.preventDefault();
        localStorage.setItem("emailAddress", emailAddress);

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                emailAddress, password
            })
        });
        const data = res.json();
        if (res.status === 400 || !data) {
            window.alert("Invalid credentials");
        }
        else {
            dispatch({ type: "USER", payload: true })
            window.alert("Login successful");
            history.push('/');
        }

    }

    const handleFailure = (result) => {
        alert(result);
    }
    const handleLogin = (googleData) => {
        console.log(googleData);
    }
    return (
        <>
            <Annoucement/>
            <Container>
                <div className="login-page">
                    <Row>
                        <Col sm={8}>
                            <div className='col-md-8 mx-auto'>
                                <h5 className='heading'>Login to explore great designs...</h5>
                                <h3 className='login-heading'>Log in with Email Id</h3>
                                <hr />
                                <Form method='POST'>

                                    <div className="form-group" controlId="formBasicEmail">
                                        <label>Email address</label>
                                        <input className='form-control' type="email" name='emailAddress' value={emailAddress} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                    </div>

                                    <div className="form-group" controlId="formBasicPassword">
                                        <label>Password</label>
                                        <input className='form-control' type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
                                    </div>
                                    <button className="btn btn-success" type="submit" name='signin' id='signin' onClick={loginUser}>
                                        Login
                                    </button>
                                    <hr />
                                    <GoogleLogin
                                        clientId={process.env.REACT_APP_CLIENT_ID}
                                        buttonText='LOGIN WITH GOOGLE'
                                        onSuccess={handleLogin}
                                        onFailure={handleFailure}
                                        cookiePolicy={'single_host_origin'}
                                    ></GoogleLogin>
                                </Form>
                                <br />
                                <h4><NavLink to="/register"> Register Now </NavLink>| <NavLink to="/resetpass"> Forgot Password?</NavLink></h4>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className='side-login'>
                                <h1 className='login-title'>SALE</h1>
                                <h2 className='login-title-b'>UPTO 70% OFF!</h2>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Login

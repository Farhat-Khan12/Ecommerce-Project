import React, { useState, useEffect } from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import Annoucement from './Annoucement';
import '../components/CSS/Register.css';

const Register = () => {
const history = useHistory();

    const [user, setUser] = useState({
        firstName: "", lastName: "", emailAddress: "", password: "", cpassword: "", phoneNumber: "", gender: ""
    });

    useEffect(() => { }, [user]);

    const handleInputs = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value });
    };
    console.log(user);


    //sending data to db
    const PostDataBackend = async (e) => {
        e.preventDefault();

        const { firstName, lastName, emailAddress, password, cpassword, phoneNumber, gender } = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                firstName, lastName, emailAddress, password, cpassword, phoneNumber, gender
            })
        });

        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            //console.log("Invalid Registration");
        }
        else {
            window.alert("Registration successful");
            //console.log("Registration successful");

            history.push("/login");
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
            <Annoucement />
            <br/>
            <Container>
                <Row>
                <Col sm={4}>
                <div className='side-reg'>
                <h1 className='reg-title'>SALE</h1>
                <h2 className='reg-title-b'>UPTO 70% OFF!</h2>
                <br />
                <h3 className='reg-title-b-b'>Firstly SignUp for Great Offers...</h3>
              </div>
                </Col>
                <Col sm={8} className='reg-page'>
                <h5 className='heading'>Sign Up to get great offers...</h5>
              <h3 className='sign-heading'>Sign Up with Email Id</h3>
              <br />
                    <Form method='POST'>
                        <div className="form-group" controlId="formBasicFname">
                            <label className='label'>First Name</label>
                            <input className='form-control' type="text" name='firstName' value={user.firstName} onChange={handleInputs} placeholder="First Name" />
                        </div>
                        <div className="form-group" controlId="formBasicLname">
                            <label className='label'>Last Name</label>
                            <input className='form-control' type="text" name='lastName' value={user.lastName} onChange={handleInputs} placeholder="Last Name" />
                        </div>
                        <div className="form-group" controlId="formBasicEmail">
                            <label className='label'>Email address</label>
                            <input className='form-control' type="email" name='emailAddress' value={user.emailAddress} onChange={handleInputs} placeholder="Enter email" />
                        </div>

                        <div className="form-group" controlId="formBasicMobileno">
                            <label className='label'>Mobile Number</label>
                            <input className='form-control' type="number" name='phoneNumber' value={user.phoneNumber} onChange={handleInputs} placeholder="Mobile Number" />
                        </div>

                        <div className="form-group" controlId="formBasicGender">
                            <label className='label'>Gender</label><br/>
                            <Form.Check type="radio" inline label="Male" name='gender' value="male" onChange={handleInputs} />
                            <Form.Check type="radio" inline label="Female" name='gender' value="female" onChange={handleInputs} />
                        </div>


                        <div className="form-group" controlId="formBasicPassword">
                            <label className='label'>Password</label>
                            <input className='form-control' type="password" name='password' value={user.password} onChange={handleInputs} placeholder="Password" />
                        </div>
                        <div className="form-group" controlId="formBasicCPassword">
                            <label className='label'>Confirm Password</label>
                            <input className='form-control' type="password" name='cpassword' value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" />
                        </div>
                        <button type="submit" name='signup' id='signup' className='btn btn-success' style={{ fontSize: "20px" }} onClick={PostDataBackend}>
                            Register
                        </button>

                    </Form>

                    <br />
                    <hr />
                    <GoogleLogin
                        clientId={process.env.REACT_APP_CLIENT_ID}
                        buttonText='REGISTER WITH GOOGLE'
                        onSuccess={handleLogin}
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                    ></GoogleLogin>
                    <br />
                    <div>
                        <br /> <h4>Already Registered ? <NavLink to='/login'>Login here</NavLink></h4>
                    </div>
                </Col>
                </Row>
            </Container>
        </>
    )
}

export default Register
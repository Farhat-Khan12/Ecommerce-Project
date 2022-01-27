import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import '../components/CSS/Subscribe.css';
import '../components/CSS/ShippingAddress.css';
import { useDispatch } from 'react-redux';

//const dispatch = useDispatch();

const ShippingAddress = () => {
    const history = useHistory();
    const redirectDashboard = e => {
        e.preventDefault()
        // navigate(-1);
        history.push("/")
    }
    const [fullNameErr, setFullNameErr] = useState({});
    const [addressErr, setAddressErr] = useState({});
    const [cityErr, setCityErr] = useState({});
    const [countryErr, setCountryErr] = useState({});
    const [postalCodeErr, setPostalCodeErr] = useState({});
    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();
        //dispatch(saveShippingAddress(fullName,address,city,country,postalCode));
        if (isValid) {
            setFullName(" ");
            setAddress(" ");
            setCity("");
            setCountry("");
            setPostalCode("");
            history.push("/payment")
        }
    }

    const formValidation = () => {
        const fullNameErr = {};
        const addressErr = {};
        const cityErr = {};
        const countryErr = {};
        const postalCodeErr = {};
        let isValid = true;

        if (!fullName.includes(' ')) {
            fullNameErr.FullName = "Please write both First and Last name";
            isValid = false;
        }

        // if (!address.includes()) {
        //     addressErr.Address = "Enter a valid Email Id containing @";
        //     isValid = false;
        // }

        if (fullName.trim().length <= 0) {
            fullNameErr.FullName = "Please Provide Full Name";
            isValid = false;
        }

        // if (address.trim().length <= 4) {
        //     addressErr.Address = "Password should be of length 5 or more"
        //     isValid = false;
        // }

        if (address.trim().length <= 0) {
            addressErr.Address = "Please Enter the Address";
            isValid = false;
        }

        if (city.trim().length <= 0) {
            cityErr.City = "Please Enter the City";
            isValid = false;
        }

        if (country.trim().length <= 0) {
            countryErr.Country = "Please Enter the Country";
            isValid = false;
        }

        if (postalCode.trim().length <= 0) {
            postalCodeErr.PostalCode = "Please Enter the Postal Code";
            isValid = false;
        }

        // if (!postalCode.includes('1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9' || '0')) {
        //     postalCodeErr.PostalCode = "Only Numbers Allowed";
        //     isValid = false;
        // }
        setFullNameErr(fullNameErr);
        setAddressErr(addressErr);
        setCityErr(cityErr);
        setCountryErr(countryErr);
        setPostalCodeErr(postalCodeErr);
        return isValid;
    }

    const data={fullName,address}
    return (
        <div className='main-container'>
            <Container>
                <Row>
                    <Col sm={8}>
                        <h2>SHIPPING ADDRESS</h2>
                        <br />
                        <form onSubmit={onSubmit}>
                            <div className='form-group'>
                                <label>Full Name</label><br />
                                <input type="text" placeholder='Enter Full Name' className='form-control' value={fullName}
                                    onChange={(e) => { setFullName(e.target.value) }} />
                                {Object.keys(fullNameErr).map((key) => {
                                    return (
                                        <div style={{ color: "red" }}>
                                            {fullNameErr[key]}
                                        </div>
                                    )
                                })}
                            </div><br/>
                            <div className='form-group'>
                                <label>Address</label><br />
                                <input type="text" placeholder='Enter Address to deliver product' className='form-control' value={address}
                                    onChange={(e) => { setAddress(e.target.value) }} />
                                {Object.keys(addressErr).map((key) => {
                                    return (
                                        <div style={{ color: "red" }}>
                                            {addressErr[key]}
                                        </div>
                                    )
                                })}
                            </div><br/>
                            <div className='form-group'>
                                <label>City</label><br />
                                <input type="text" placeholder='Enter City' className='form-control' value={city}
                                    onChange={(e) => { setCity(e.target.value) }} />
                                {Object.keys(cityErr).map((key) => {
                                    return (
                                        <div style={{ color: "red" }}>
                                            {cityErr[key]}
                                        </div>
                                    )
                                })}
                            </div><br/>
                            <div className='form-group'>
                                <label>Country</label><br />
                                <input type="text" placeholder='Enter Country' className='form-control' value={country}
                                    onChange={(e) => { setCountry(e.target.value) }} />
                                {Object.keys(countryErr).map((key) => {
                                    return (
                                        <div style={{ color: "red" }}>
                                            {countryErr[key]}
                                        </div>
                                    )
                                })}
                            </div><br/>
                            <div className='form-group'>
                                <label>Postal Code</label><br />
                                <input type="text" placeholder='Enter Postal Code' className='form-control' value={postalCode}
                                    onChange={(e) => { setPostalCode(e.target.value) }} />
                                {Object.keys(postalCodeErr).map((key) => {
                                    return (
                                        <div style={{ color: "red" }}>
                                            {postalCodeErr[key]}
                                        </div>
                                    )
                                })}
                            </div><br/>
                            <div className='form-group'>
                                <button className="btn btn-warning" type="reset">Reset Address</button>
                                <button className="btn btn-success" type="submit">Continue</button>
                            </div>
                        </form>

                    </Col>
                    <Col sm={4} className='col2'>
                        <button onClick={redirectDashboard} className='btn1'>
                            <div className='living-div'>

                                <h3 className='title'>LIVING</h3>

                            </div>
                        </button>
                        <button onClick={redirectDashboard} className='btn2'>
                            <div className='study-div'>

                                <h3 className='title'>STUDY</h3>


                            </div>
                        </button>
                        <button onClick={redirectDashboard} className='btn3'>
                            <div className='bedroom-div'>

                                <h3 className='title'>BEDROOM</h3>


                            </div>
                        </button>
                        <button onClick={redirectDashboard} className='btn4'>
                            <div className='dining-div'>

                                <h3 className='title'>DINING</h3>


                            </div>
                        </button>
                        <button onClick={redirectDashboard} className='btn5'>
                            <div className='storage-div'>

                                <h3 className='title'>STORAGE</h3>


                            </div>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShippingAddress

import React from 'react';
import '../components/CSS/Subscribe.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
export default function Subscribe() {
  const history = useHistory();
  const redirectDashboard = e => {
    e.preventDefault()
    // navigate(-1);
    history.push("/")
  }
  return (
    <div className='main-container'>

      <Container>
        <Row>
          <Col sm={8} className='col1'>
            <h1 className="thank_heading">Congratulations, You're Now on the list!</h1>
            <br />
            <h4 className='thank_message'>
              Thank you for making our day by signing up to receive our emails.
              We hope you enjoy opening them as much as we enjoy making them.
            </h4>
            <br />
            <h2 className='thank_offer'>We have a special discount and offer for you...</h2>
            <br />
            <button className='discount_button' onClick={redirectDashboard}>
              <img src="images/discount.jpg" className='discount_img' />
            </button>
            <br /><br />
            <button className='btn btn-warning' onClick={redirectDashboard}>GET DISCOUNT!</button>
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
  );
}

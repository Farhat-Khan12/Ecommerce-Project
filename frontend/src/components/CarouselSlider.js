import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import '../components/CSS/CarouselDash.css';
export default function CarouselDash() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='carousel'>
            <div className='carousel'>
                <Carousel>
                    <Carousel.Item interval={2500}>
                        <img
                            className="d-block w-100 image"
                            src="images/DashImage1.jpg"
                            alt="Image One"
                        />
                        <Carousel.Caption>
                            <h1 className='heading1'>BEST BUY UNDER 10K</h1>
                            <button className='para1'>
                                <h3>SHOP NOW!</h3>
                            </button>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img
                            className="d-block w-100 image"
                            src="images/DashImage2.jpg"
                            alt="Image Two"
                        />
                        <Carousel.Caption>
                            <h1 className='heading2'>CHECK THE FRESH PICKS!!!</h1>
                            <button className='para2'>
                                <h3>SHOP NOW!</h3>
                            </button>
                            <br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2500}>
                        <img
                            className="d-block w-100 image"
                            src="images/DashImage3.jpg"
                            alt="Image Two"
                        />
                        <Carousel.Caption>
                            <h1 className='heading3'>SALE SALE SALE!!!</h1>
                            <button className='para3'>
                                <h3>UPTO 70% OFF!</h3>
                            </button>
                            <br /><br /><br /><br /><br /><br/><br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}


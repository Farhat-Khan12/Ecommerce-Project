import React from 'react';
import CarouselDash from './CarouselSlider';
import Categories from './Categories';
import Categories2 from './Categories2';
import styled from 'styled-components';
const Home = () => {
    const Heading = styled.h1`
        text-align: center;
        color: teal;
        font-family: monospace;
        background-color: lightyellow;
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: underline;
    `; 
    return (
        <>
            <CarouselDash/>
            <br/>
            <Heading>Featured Collection</Heading>
            <Categories/>
            <Categories2/>
        </>
    )
}
export default Home

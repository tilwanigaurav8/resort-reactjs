import React from 'react';
import Banner from '../components/Banner';
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
const Rooms=()=>{
    return(
        <>
            <Hero hero="roomsHero">
            <Banner title="Our Rooms" subtitle="Deluxe Rooms Starting From 1200 Only">
            <Link to="/" className='btn-primary'>Return Home</Link>
            </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}

export default Rooms;
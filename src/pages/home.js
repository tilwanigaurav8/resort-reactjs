import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
const Home=()=>{
    return(
        <>
            <Hero hero="defaultHero">
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting From 1200 Only">
                <Link to="/rooms" className='btn-primary'>Know More!</Link>
                </Banner>
            </Hero>

            <Services />
            <FeaturedRooms></FeaturedRooms>
        
        </>
    )
}

export default Home;
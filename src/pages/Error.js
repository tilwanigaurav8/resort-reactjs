import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
const Error=()=>{
    return(
        <Hero hero="defaultHero">
            <Banner title="404" subtitle="Page Not Found!">
                <Link to='/' className='btn-primary'>Navigate to Home</Link>
            </Banner>
        </Hero>
    )
}

export default Error;
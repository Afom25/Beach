import React from "react";
import Hero from '../components//Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services'

export default function Home(){
    return (
        <>
        <Hero>
           <Banner title="luxurious rooms" subtitle="deluxe rooms staring at $299">
            <Link to='/rooms' className='btn-priaray'>
                Our Rooms
            </Link>
           </Banner>   
    </Hero>
    <Services/>
    </>
    );
}
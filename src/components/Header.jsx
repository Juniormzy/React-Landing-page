import React from 'react';
import Navbar from './Navbar';
import video1 from '../components/images/background.mp4';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className='header'>
            <Navbar/>
           <video autoPlay loop muted className='image1'>
               <source src={video1} type="video/mp4"></source>
            </video>           <div className='header-text'>
           <h1 className='header-h1'>Save the Children</h1>
           <h3 className='header-h3'> When a child gets access to good food, it can change just about everything<br />Every little things does matters, Donate now and save a life</h3>
           <div className='header-btn'>
           <a href='#' className='header-button'>Learn More</a>
           <a href='#' className='header-button2'> Donate Now</a>
           </div>
           </div>
        </div>
    )
}

export default Header;

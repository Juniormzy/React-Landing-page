import React from 'react';
import Navbar from './Navbar';
import video1 from '../components/images/background3.mp4';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className='header'>
           <video autoPlay loop muted className='image1'>
               <source src={video1} type="video/mp4"></source>
            </video>           <div className='header-text'>
           <h1 className='header-h1'>Welcome To Greece</h1>
           <h3 className='header-h3'> If you are looking for travel inspiration, visitgreece.gr has everything you need to know.<br/> Travel ideas, Events, guides, what to do, where to go in Greece</h3>
           <div className='header-btn'>
           <a  href='#' className='header-button'>Main Land </a>
           <a href='#' className='header-button2'>Island</a>
           </div>
           </div>
        </div>
    )
}

export default Header;

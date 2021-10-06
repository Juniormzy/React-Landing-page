import React from 'react';
import logo from '../components/images/logo.png';
import {Link} from 'react-scroll';


function Navbar() {
    return (
        <div className='navbar'>
            <img src={logo} alt='logo' className='logo'/>
            <ul>
                <li ><Link to='#' className='nav-ul'>Home</Link></li>
                <li ><Link to='#' className='nav-li'>About</Link></li>
                <li ><Link to='#' className='nav-li'>Volunteers</Link></li>
                <li ><Link to='#' className='nav-li'>Blog</Link></li>
                <li ><Link to='#' className='nav-li'>Contact</Link></li>
                <a><Link url='#' className='nav-button'>Donate</Link></a>
            </ul>
            
            
            
        </div>
    )
}

export default Navbar;

import video1 from '../components/images/2.mp4';
import { Link } from 'react-scroll';

function Header() {
    return (
        <div className='header'>
           <video autoPlay loop muted className='image1'>
               <source src={video1} type="video/mp4"></source>
            </video>           <div className='header-text'>
           <h1 className='header-h1'>Hallowen House party</h1>
           <h3 className='header-h3'> Party for international students around Athens, Get yourself ready beacause it's going to be ablast<br/>
           click the button below to book your ticket</h3>
           <div className='header-btn'>
           <a  href='#' className='header-button'>Book Ticket</a>
           </div>
           </div>
        </div>
    )
}

export default Header;

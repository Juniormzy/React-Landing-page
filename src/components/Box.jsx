import React from 'react'

function Box(props) {
    return (
        
            <div className='box'>
            <div className='img-box'>
                <img src={props.image} alt={props.alte}  className='box-img'/>
            </div>
            <div className='box-text'>
                <p>{props.text}</p>
            </div>
            <div className='box-btn'>
                
            <a href ='#' className='cv-btn'>{props.button}</a>
            </div>
            
        </div>
        
    )
}

export default Box;

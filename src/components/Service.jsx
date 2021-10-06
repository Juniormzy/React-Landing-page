import React from 'react';
import Box from './Box';
import test from '../components/images/food.png';

function service() {
    return (
        <div className='service'>
            <div className='service-text'>
                <h1>How we help</h1>
                <h1>We Are In A Mission To Help The Helpless</h1>
            </div>
            <div className='box-box'>
            <Box image={test}  button='Learn More' text='The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.'/>
            <Box image={test}  button='Learn More' text='The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.'/>
            <Box image={test}  button='Learn More' text='The sea freight service has grown conside rably in recent years. We spend timetting to know your processes to.'/>
            </div>
        </div>
    )
}

export default service

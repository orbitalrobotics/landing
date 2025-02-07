import React from 'react';
import './Solutions.css'; // CSS file for styling

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import videoBg from "../assets/video/ai_catch_montage.mp4"


function Item(props)
{
    return (
        <div className='video-main'>
        <video src={videoBg} autoPlay loop muted />
         </div>
    )
}

function Solutions(props) {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (

        <div className="solutions-container">
            <div className="solutions-background">
                <div className="solutions-content">
                    <h1>Our Robotic Solutions</h1>
                    <p>
                        Cutting-edge robotic technologies tailored to solve complex challenges across industries.
                    </p>

                    <Carousel>
                    {
                        items.map( (item, i) => <Item key={i} item={item} /> )
                    }
                    </Carousel>
                </div>
            </div>
        </div>


    );
}

export default Solutions;
import React from 'react';
import './Solutions.css'; // CSS file for styling

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import catch_montage from "../assets/video/ai_catch_montage.mp4"
import ar3_ai_view_catch from "../assets/video/ai_view_ar3_catch.mp4"
import ar3_catch from "../assets/video/ar3_catch.mp4"
import dual_arm_ik from "../assets/video/dual_arm_ik_obj_grasp.mp4"
import free_float_grasp from "../assets/video/free-float-cube-grasp.mp4"
import pose_est from "../assets/video/pose_estimation_fast.mp4"
import single_arm_grasp from "../assets/video/single_arm_cube_catch.mp4"
import single_arm_planning from "../assets/video/single_arm_planning.mp4"

function Item(props)
{
    return (
        <div className='video-main'>
            <p >{props.item.name}</p>
            <video src={props.item.video} autoPlay loop muted />
        </div>
    )
}

function Solutions(props) {

    var items = [
        {
            video: catch_montage,
            name: "Deep Reinforcement Learning",
            description: "Hello World!"
        },
        {
            video: ar3_ai_view_catch,
            name: "AI Powered Catching with Computer Vision",
            description: "AI Powered Catching with Computer Vision"
        },
        {
            video: ar3_catch,
            name: "Deep Reinforcement Learning Grasp with Hardware",
            description: "Deep Reinforcement Learning Grasp with Hardware"
        },
        {
            video: dual_arm_ik,
            name: "Physics Informed System Identification Based Inverse Kinematics",
            description: "Physics Informed System Identification Based Inverse Kinematics"
        },
        {
            video: free_float_grasp,
            name: "AI Powered Motion and Grasp Planning",
            description: "AI Powered Motion and Grasp Planning"
        },
        {
            video: pose_est,
            name: "Precise Pose Estimation",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            video: single_arm_grasp,
            name: "AI Powered Motion and Grasp Planning",
            description: "AI Powered Motion and Grasp Planning"
        },
        {
            video: single_arm_planning,
            name: "Real time Motion Planning",
            description: "Real time Motion Planning",
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

                    <Carousel autoPlay={false}>
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
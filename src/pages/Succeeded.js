import React from 'react';
import './Succeeded.css';
import succeeded from '../assets/succeeded.mp4'

function Succeeded() {
    return (
        <div className="succeeded">
            <div className="succeeded__overlay"></div>
            <video className="succeeded__video" src={succeeded} autoPlay loop muted></video>
            <h1>Successfully Logged In !!!</h1>
        </div>
    )
}

export default Succeeded;

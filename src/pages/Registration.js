import React from 'react';
import SignUp from '../components/SignUp';
import './Registration.css';
import universe from '../assets/universe.mp4';

function Registration() {
    return (
        <div className="registration">
            <video src={universe} autoPlay loop muted></video>
            <div className="registration__singn">
                <SignUp />
            </div>
        </div>
    )
}

export default Registration;

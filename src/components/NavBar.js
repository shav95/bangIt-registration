import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { logOut } from '../redux/actions';

function NavBar({ isAuth, setIsAuth, logOut }) {

    const logOutHandler = () => {
        logOut(setIsAuth);
    }

    const inOut = () => {
        return isAuth ? <Button onClick={logOutHandler} variant="contained">Log Out</Button> : (<div className="navbar__inReg">
            <Link to="login"><Button variant="contained" color="primary">LogIn</Button></Link>
            <Link to="registration"><Button variant="contained" color="secondary">Register</Button></Link>
        </div>)
    }

    return (
        <div className="navbar">
            {inOut()}
        </div>
    )
}

export default connect(null, { logOut })(NavBar);

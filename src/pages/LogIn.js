import React, { useState } from 'react';
import './Login.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../components/TextFields';

import { connect } from 'react-redux';
import { logIn } from "../redux/actions";
import { Link } from 'react-router-dom';

import universe2 from '../assets/universe2.mp4';
import Button from '@material-ui/core/Button';

function LogIn({ logIn, setIsAuth }) {

    const [errorMessage, setErrorMessage] = useState('');

    const validation = Yup.object().shape({
        userName: Yup.string()
            .matches(/^[A-Za-z0-9_-]*$/, "User name must be letters and numbers...")
            .max(20, "There must be max 20 letters...")
            .min(3, "There must be at least 3 letters...")
            .required("User name is required..."),
        password: Yup.string()
            .matches(/^[A-Za-z0-9_-]*$/, "Password must be letters and numbers...")
            .min(6, "Password must be at leatst 6 characters...")
            .max(20, "There must be 20 characters...")
            .required("Password is required..."),
    })

    const onLogInSubmit = (values) => {
        logIn(values, setIsAuth, setErrorMessage)
    }

    return (
        <div className="login__container">
            <video className="login__video" src={universe2} autoPlay loop muted></video>
            <Formik
                initialValues={{
                    userName: '',
                    password: '',
                }}
                validationSchema={validation}
                onSubmit={onLogInSubmit}
            >
                {
                    formik => {
                        return (
                            <div className="login">
                                <h1>Log In</h1>
                                <Form>
                                    <TextInput label="User Name" placeholder="Enter user name..." name="userName" type="text" />
                                    <TextInput label="Password" name="password" placeholder="Enter password..." type="password" />
                                    <Button variant="outlined" color="primary" type="submit">LogIn</Button>
                                    <Link to="registration"><Button variant="outlined" color="secondary">Sign Up</Button></Link>
                                    {errorMessage && (<span className="login__incorrect">Incorrect UserName or Password</span>)}
                                </Form>
                            </div>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default connect(null, { logIn })(LogIn);

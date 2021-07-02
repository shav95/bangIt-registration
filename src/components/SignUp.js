import React, { useState } from 'react';
import './SignUp.css'
import { Formik, Form } from 'formik';
import TextFields from './TextFields';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { register } from '../redux/actions';
import { useHistory } from 'react-router-dom';

function SignUp({ register }) {

    const history = useHistory();
    const [regDone, setRegDone] = useState(false);

    const validate = Yup.object().shape({
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
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password must match...")
            .required("Confirm Password is required..."),
    })

    const onRegisterSubmit = (values) => {
        register(values);
        setRegDone(true);
    }

    const done = () => {
        if (regDone) {
            setTimeout(() => {
                return history.push('/login')
            }, 2000)
            return (
                <div className="regDone">
                    <h1>Successfully registered</h1>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    return (
        <Formik
            initialValues={{
                userName: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={onRegisterSubmit}
        >
            {
                formik => {
                    return (
                        <div className="singup">
                            <h1>Sign Up</h1>
                            <Form>
                                <TextFields label="User Name" placeholder="Enter user name..." name="userName" type="text" />
                                <TextFields label="Password" placeholder="Enter password..." name="password" type="password" />
                                <TextFields label="Confirm Password" placeholder="Confirm password..." name="confirmPassword" type="password" />
                                <Button className="signup__register" type="submit" variant="contained" color="primary">Register</Button>
                                <Button className="signup__reset" type="reset" variant="contained" color="secondary">Reset</Button>
                            </Form>

                            {done()}
                        </div>
                    );
                }
            }
        </Formik>
    )
}


export default connect(null, { register })(SignUp);

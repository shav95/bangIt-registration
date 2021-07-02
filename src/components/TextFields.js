import React from 'react';
import './TextFields.css';
import { ErrorMessage, useField } from 'formik';
import TextField from '@material-ui/core/TextField';

function TextFields({ label, placeholder, ...props }) {

    const [filed, meta] = useField(props);

    return (
        <div className="textInput">
            <label htmlFor={filed.name}>{label}</label>
            <TextField
                id={`"standard-basic"${Math.random() /* none-unique id error solved!!! */}`} label={placeholder}
                className={`${meta.touched && meta.error && "textInput__invalid"}`}
                {...filed}
                {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={filed.name} className="textInput__error" />
        </div>
    )
}

export default TextFields;

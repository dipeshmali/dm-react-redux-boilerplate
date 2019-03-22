import React from 'react';
import { Field, reduxForm } from 'redux-form';


const validate = (values) => {
    const error = {}
    if(!values.username){
        error.username = "Enter username"
    }
    if(!values.password){
        error.password = "Enter password"
    }
    return error;
}


let textInput = (props) => {
    const { input, type, label, placeholder, meta : {touched , error } } = props;
    return (
        <div>
            <label>{label}</label>
            <input {...input} type={type} placeholder={placeholder} />
            {touched && error ? <span style={{"color":"red"}}>{error}</span> : ''}
        </div>

    )
}

/*
let textInput2 = ({input, type, label, placeholder, meta : {touched , error } }) => (
    <div>
        <label>{label}</label>
        <input {...input} type={type} placeholder={placeholder} />
        {touched && error ? <span style={{"color":"red"}}>{error}</span> : ''}
    </div>
)
*/



let LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field 
                name="username"
                type="text"
                label="Username"
                placeholder="Enter username (admin)" 
                component={textInput} 
            />
            <Field 
                name="password"
                type="password"
                label="Password"
                placeholder="Enter password (admin)" 
                component={textInput} 
            />
            <button type="submit">Login</button>
        </form>
    )
}

const Loginform = reduxForm({
    form: 'loginform',
    validate
})(LoginForm);

export default Loginform;
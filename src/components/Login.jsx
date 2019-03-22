import React, { Component } from 'react';
import {connect} from 'react-redux';

import Loginform from '../forms/login';

import { loginMe } from '../store/actions'

import { successMsg, errorMsg} from '../comman/toast';

class Login extends Component {

    constructor(props){
        super(props);
    }


    login = (values) => {
        const data = {
            'username' : values.username,
            'password' : values.password
        }
        this.props.dispatch(loginMe(data));
    }



    componentDidUpdate(){
        const { isloading, iserror, status } = this.props;
        if(!isloading && status === 1){
            successMsg('Welcome: you are login successfully')
            this.props.history.push('/dashboard');
        }
        else{
            errorMsg('Invalid username or password')
        }
    }


    render() {
        return (
            <div>
                <h2>Login form</h2>
                <Loginform onSubmit={this.login} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return {
        isloading  : auth.loading,
        status : auth.status,
        iserror : auth.error
    }
}

export default connect(mapStateToProps)(Login);
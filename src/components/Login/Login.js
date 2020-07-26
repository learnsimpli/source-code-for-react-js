import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../Forms/LoginForm';
import LogOutForm from '../Forms/LogOutForm';
import './Login.css';

const Login = (props) => {
    return (
        <div>
            {
                props.isEmployeeLoggedIn ? <LogOutForm {...props} /> : <LoginForm {...props} />
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isEmployeeLoggedIn: state.login.isEmployeeLoggedIn
    }
}
export default connect(mapStateToProps)(Login);
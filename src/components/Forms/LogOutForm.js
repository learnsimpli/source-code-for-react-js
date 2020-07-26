import React from 'react';
import { connect } from 'react-redux';

const LogOutForm = (props) => {
    return (
        <div className='form'>
            <h1>Welcome to react tutorial</h1>
            <button onClick={props.onLogout}>Logout</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isEmployeeLoggedIn: state.login.isEmployeeLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch({
            type: 'LOGOUT'
        })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LogOutForm);
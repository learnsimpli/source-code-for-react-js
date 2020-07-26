import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import InitApp from './components/InitApp/InitApp';

class App extends Component {

  render() {
    return (
      <InitApp isEmployeeLoggedIn={this.props.isEmployeeLoggedIn}  />
    );
  }
}

const mapStateToProps = state => {
  return {
    isEmployeeLoggedIn: state.login.isEmployeeLoggedIn
  }
}

export default connect(mapStateToProps)(App);
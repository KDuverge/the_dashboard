import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { LoginForm } from '../../UI';

const Login = ({ isLoggedIn }) => {
  return <>{isLoggedIn ? <Redirect to='/projects' /> : <LoginForm />}</>;
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, null)(Login);

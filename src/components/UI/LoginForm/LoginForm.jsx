import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as AuthActions from '../../../redux/Auth/actions';

import Loader from '../Loader/Loader';
import Logo from '../Logo/Logo';

import './LoginForm.css';

const LoginForm = ({ isLoading, login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isLoading) return <Loader />;

  return (
    <>
      <div className='login-container'>
        <Logo />
        <form
          className='login-form'
          onSubmit={() => login({ email, password })}
        >
          <div className='form-control-group'>
            <input
              required
              type='text'
              placeholder='Enter email...'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='form-control-group'>
            <input
              required
              type='password'
              placeholder='Enter password...'
              name='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input type='submit' value='' hidden />
        </form>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.ui.isLoading,
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(AuthActions.login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

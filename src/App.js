import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationContainer } from 'react-notifications';

import Dashboard from './components/Layout/Dashboard/Dashboard';

import * as AuthActions from './redux/Auth/actions';
import * as ProjectsActions from './redux/Projects/actions';

import { Auth } from './services/authService';

import './App.css';

const App = ({ setLogin, getProjects }) => {
  useEffect(() => {
    if (Auth.hastToken) {
      setLogin();
    }
    const fetchProjects = async () => {
      await getProjects();
    };
    fetchProjects();
  }, [getProjects, setLogin]);

  return (
    <Router>
      <Dashboard />
      <NotificationContainer />
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  setLogin: bindActionCreators(AuthActions.setLogin, dispatch),
  getProjects: bindActionCreators(ProjectsActions.getProjects, dispatch),
});

export default connect(null, mapDispatchToProps)(App);

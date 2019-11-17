import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ProtectedRoute from '../Utils/ProtectedRoute';

import { Login, Logout, Update, Upload, Projects, Users } from '../../Pages';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='App'>
      <main className='dashboard-container'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route exact path='/' render={() => <Redirect to='/projects' />} />
          <ProtectedRoute path='/users' component={Users} />
          <ProtectedRoute path='/upload' component={Upload} />
          <ProtectedRoute path='/logout' component={Logout} />
          <ProtectedRoute path='/projects/:id' component={Update} />
          <ProtectedRoute exact path='/projects' component={Projects} />
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;

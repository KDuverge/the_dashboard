import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import ContentContainer from '../Content/Content';

const ProtectedRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={routeProps => {
          return isLoggedIn ? (
            <ContentContainer>
              <Component {...routeProps} />
            </ContentContainer>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }}
      />
    </>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, null)(ProtectedRoute);

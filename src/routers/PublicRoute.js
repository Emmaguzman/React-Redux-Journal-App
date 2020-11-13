import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticaded,
    component: Component,
    ...rest
}) => {
    return (
        <Route
          {...rest}
          component={(props) =>
            (isAuthenticaded )
            ?<Redirect to="/" />
            : <Component {...props} /> 
          }
        />
      );
    };
    
    PublicRoute.propTypes = {
      isAuthenticaded: PropTypes.bool.isRequired,
      component: PropTypes.func.isRequired,
    };


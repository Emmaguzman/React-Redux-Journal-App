import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
export const PrivateRoute = ({
  isAuthenticaded,
  component: Component,
  ...rest
}) => {
  //console.log(rest)
  localStorage.setItem("lastPath", rest.location.pathname);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticaded ? (
          <Component {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  isAuthenticaded: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

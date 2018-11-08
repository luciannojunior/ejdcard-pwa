import React from 'react'
import {
  Route,
  Redirect,
} from "react-router-dom";


const PrivateRoute = ({ component: Component, role, ...rest }) => {
  // verify that the current user has role and whatnot
  return (
  <Route
    {...rest}
    render={props =>
      true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)}

export default PrivateRoute
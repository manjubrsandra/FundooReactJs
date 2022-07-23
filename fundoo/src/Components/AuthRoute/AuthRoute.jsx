import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

function AuthRoute() {
  return (
    <div>
      <Route 
      //{...rest}
      render={props => {
        if (!localStorage.getItem("UserID")) {
            return <Component {...props} />
        } else {
            return <Redirect to="/dashboard" />
        }
      }}
      />
    </div>
  )
}

export default AuthRoute

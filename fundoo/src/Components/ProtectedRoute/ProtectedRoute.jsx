import React, { Components } from 'react'
import {Redirect, Route} from 'react-router-dom'

function ProtectedRoute() {
  return (
    <div>
      <Route
       // {...rest}
        render={(props) =>{
            if (localStorage.getItem("token")) {
                return <Components {...props}/>
            }
            else{
                return(
                     <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                 );
                }
        }}
        />
    </div>
  )
}

export default ProtectedRoute

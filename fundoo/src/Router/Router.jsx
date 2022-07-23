import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import AuthRoute from '../Components/AuthRoute/AuthRoute';
  import SignUp from '../Pages/SignUp/Signup';
  import SignIn from '../Pages/SignIn/Signin';
  import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute';
  import Dashboard from '../Pages/Dashboard/Dashboard';
  

 function RouterDOM() {
  return (
    <div>
       <Router>

       {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
       <Switch>
       <AuthRoute exact path="/" component={SignIn} />
       <AuthRoute path="/signup" component={SignUp} />
       <ProtectedRoute path="/dashboard" component={Dashboard} />
       </Switch>
       </Router>
    </div>
  )
}

export default RouterDOM;

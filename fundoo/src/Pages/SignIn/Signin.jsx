import React from 'react'
import asset from '../../Assets/google-logo-png.png';

function Signin() {
  return (
    <div className="login">
            <div className="content">
                <div className="signin">
                    <img className="logo" src={asset} alt="" />
                    <br></br>
                    <div className="sign"><h2><b>Sign in</b></h2></div>
                    <div className="g1"><h3>Use your Google Account</h3></div>
                    <br></br>
                </div>
            </div>
     </div>
  )
}

export default Signin

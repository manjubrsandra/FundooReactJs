import React from 'react'
import Img from '../../Assets/google-logo-png.png';

function SignUp() {
  return (
    <div className='signup'>
        <div className='left'>
            <div className='align'> 
            <div className='create'>
            <img className="logox" src={Img} alt="" />
                        <h1>Create your Google Account</h1>
            </div>

            </div>

        </div>
      
    </div>
  )
}

export default SignUp;

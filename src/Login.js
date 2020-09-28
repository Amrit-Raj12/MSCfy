import React from 'react';
import './Login.css';
import { loginUrl } from './mscfy';

function Login() {
  return (
    <div className="login">
        <div className="banner">
          <img src={require('./images/MSC.png')} alt="" />
        </div>
          <a href={loginUrl}>Login with MSCfy</a>
    </div>
  )
}

export default Login

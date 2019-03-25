import React from 'react';
import LoginForm from '../components/LoginForm'

class LoginContainer extends React.Component {

  render () {
    return (
      <div className="bg-default">
        <div className="login">
          <h1>Log In</h1>
          <LoginForm />
        </div>
      </div>
    )
  }

}

export default LoginContainer;

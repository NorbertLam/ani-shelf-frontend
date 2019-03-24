import React from 'react';
import SignupForm from '../components/SignupForm'

class SignupContainer extends React.Component {

  render () {
    return (
      <div className="signup-container">
        <h1>SIGN UP</h1>
        <SignupForm />
      </div>
    )
  }

}

export default SignupContainer

import React from 'react';
import SignupForm from '../components/SignupForm'

class SignupContainer extends React.Component {

  render () {
    return (
      <div className="login">
        <h1>SIGN UP</h1>
        <SignupForm handleSignUp={this.props.handleSignUp}/>
      </div>
    )
  }

}

export default SignupContainer

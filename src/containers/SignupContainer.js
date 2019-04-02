import React from 'react';
import SignupForm from '../components/SignupForm'

class SignupContainer extends React.Component {

  render () {
    return (
      <div>
        <video autoPlay loop id="bg-video">
          <source src="/videos/signup.mp4" type="video/mp4"/>
        </video>
        
        <div className="login-container">
          <SignupForm handleSignUp={this.props.handleSignUp}/>
        </div>
      </div>
    )
  }

}

export default SignupContainer

import React from 'react';
import SignupForm from '../components/SignupForm'

class SignupContainer extends React.Component {

  render () {
    return (
      <div>
        <video autoPlay loop id="bg-video">
          <source src="/videos/hero.webm" type="video/webm"/>
        </video>
        
        <div className="login-container">
          <SignupForm handleSignUp={this.props.handleSignUp}/>
        </div>
      </div>
    )
  }

}

export default SignupContainer

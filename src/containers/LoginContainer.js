import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm'

class LoginContainer extends React.Component {

  render () {
    return (
      <div>
        <video autoPlay loop id="bg-video">
          <source src="/videos/hero.webm" type="video/webm"/>
        </video>
        
        <div className="login-container" >
          <LoginForm setLogin={this.props.setLogin} />
        </div>
      </div>
    )
  }

}

export default withRouter(LoginContainer);

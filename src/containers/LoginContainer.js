import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm'

class LoginContainer extends React.Component {

  render () {
    return (
      <div className="login-container">
        <video autoPlay loop id="bg-video">
          <source className="video" src="/videos/hero.webm" type="video/webm"/>
        </video>
        <LoginForm setLogin={this.props.setLogin} />
      </div>
    )
  }

}

export default withRouter(LoginContainer);

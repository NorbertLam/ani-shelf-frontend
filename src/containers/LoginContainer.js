import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from '../components/LoginForm'

class LoginContainer extends React.Component {

  render () {
    return (
      <div className="login">
        <h1>Log In</h1>
        <LoginForm setLogin={this.props.setLogin} />
      </div>
    )
  }

}

export default withRouter(LoginContainer);

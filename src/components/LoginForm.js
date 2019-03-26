import React from 'react';

class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
  }
  
  handleInput = event => {
    this.setState({[event.target.name]: event.target.value});
  }
  
  
  handleLogin = event => {
    event.preventDefault();

    const userObj = {
      email: this.state.email,
      password: this.state.password
    };

    this.getUserObj(userObj);

  }

  getUserObj = userObj => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
      .then(resp => resp.json())
      .then(userObj => this.props.setLogin(userObj));
  }
  
  render () {
    return (
      <div className="form-cont">
        <form className="login-form" onSubmit={this.handleLogin}>
          <input className="textbox" placeholder="E-Mail Address" autocomplete="off" type="email" name="email" value={this.state.email} onChange={this.handleInput} />
          <input className ="textbox" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleInput} />
          <input className="form-submit" type="submit" value="Login" />
        </form>
      </div>
    )
  }

}

export default LoginForm;

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
      <form onSubmit={this.handleLogin}>
        <input placeholder="E-Mail Address" type="text" name="email" value={this.state.email} onChange={this.handleInput} />
        <input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleInput} />
        <input type="submit" value="Login" />
      </form>
    )
  }

}

export default LoginForm;

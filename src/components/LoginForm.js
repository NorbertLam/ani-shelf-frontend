import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

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
      .then(console.log);
  }
  
  render () {
    return (
      <div class="ui one column stackable center aligned page grid">
        <div class="column twelve wide">
        <Form className="ui compact form" onSubmit={this.handleLogin}>
          <Form.Input className="ui small input" type="text" name="email" value={this.state.email} onChange={this.handleInput} />
          <Form.Input className="ui small input" type="text" name="password" value={this.state.password} onChange={this.handleInput} />
          <Form.Input className="ui small input" type="submit" value="Login" />
        </Form>
        </div>
      </div>

    )
  }

}

export default LoginForm;

import React from 'react';

class SignUpForm extends React.Component {
  
  state = {
    email: '',
    password: ''
  }

  handleInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    const userObj = {
      email: this.state.email,
      password: this.state.password
    }

    this.postUserObj(userObj);
  }

  postUserObj = (userObj) => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userObj)
    })
      .then(resp => resp.json())
      .then(console.log)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Email: 
          <input type="text" name="email" value={this.state.email} onChange={this.handleInput} />
        </label>
        
        <label>
          Password: 
          <input type="text" name="password" value={this.state.passwordx} onChange={this.handleInput} />
        </label>
        <input type="submit" value="Sign Up"/>
      </form>
    )
  }
}

export default SignUpForm

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
      .then(json => {
        if (json.error) {
          alert(json.error);
        } else {
          this.props.handleSignUp();
        }
      })
  }

  render () {
    return (
      <div className="form-cont">
        <form onSubmit={this.handleSubmit} className="login-form">
          <input placeholder="E-mail Address" type="text" name="email" value={this.state.email} onChange={this.handleInput} />
          <input placeholder="Password" type="text" name="password" value={this.state.passwordx} onChange={this.handleInput} />
          <input className="form-submit" type="submit" value="Sign Up"/>
        </form>
      </div>
    )
  }
}

export default SignUpForm

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
    fetch('https://anishelf-backend.herokuapp.com/users', {
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
      <div className="signup-container">
        <form onSubmit={this.handleSubmit} className="the-form signup-form">
        <label className="form-label">E-Mail Address:</label>
          <br/>
          <input className="form-input" placeholder="E-Mail Address" autoComplete="off" type="email" name="email" value={this.state.email} onChange={this.handleInput} />
          <br/>
          <label className="form-label">Password:</label>
          <br/>
          <input className="form-input" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleInput} />
          <br/>
          <input className="form-submit" type="submit" value="Sign Up"/>
        </form>
      </div>
    )
  }
}

export default SignUpForm

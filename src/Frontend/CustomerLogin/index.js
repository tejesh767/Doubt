import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class CustomerLogin extends Component {
  state = {username: '', password: ''}

  updatedUsername = event => {
    this.setState({username: event.target.value})
  }

  updatedPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = async () => {
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'http://localhost:5000/userlogin'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    console.log(response)
  }

  render() {
    const {username, password} = this.state

    return (
      <div className="container">
        <div className="loginContainer">
          <h1 className="header">Customer Login</h1>
          <label htmlFor="username" className="text">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="username"
            className="input"
            onChange={this.updatedUsername}
          />
          <br />
          <label htmlFor="password" className="text">
            PASSWORD
          </label>
          <br />
          <input
            type="text"
            id="password"
            className="input"
            onChange={this.updatedPassword}
          />{' '}
          <br />
          <div className="subButton">
            <button
              type="button"
              className="customerSubmit"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </div>
          <div className="bottomLinks">
            <Link to="/registerCustomer" className="links">
              Customer Register
            </Link>
            <Link to="/registerAdmin" className="links">
              Admin Register
            </Link>
            <Link to="/loginAdmin" className="links">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default CustomerLogin

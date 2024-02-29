import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class AdminLogin extends Component {
  render() {
    return (
      <div className="container">
        <div className="loginContainer">
          <h1 className="header">Admin Login</h1>
          <label htmlFor="username" className="text">
            USERNAME
          </label>
          <br />
          <input type="text" id="username" className="input" /> <br />
          <label htmlFor="password" className="text">
            PASSWORD
          </label>{' '}
          <br />
          <input type="text" id="password" className="input" /> <br />
          <div className="subButton">
            <button type="button" className="customerSubmit">
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
            <Link to="/customerLogin" className="links">
              Customer Login
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default AdminLogin

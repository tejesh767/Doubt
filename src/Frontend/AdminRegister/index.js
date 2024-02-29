import {Component} from 'react'

import './index.css'

class AdminRegister extends Component {
  render() {
    return (
      <div className="container">
        <div className="loginContainer">
          <h1 className="header">Admin Register</h1>
          <label htmlFor="firstName" className="text">
            FIRST NAME
          </label>
          <br />
          <input type="text" id="firstName" className="input" /> <br />
          <label htmlFor="secondName" className="text">
            SECOND NAME
          </label>
          <br />
          <input type="text" id="secondName" className="input" /> <br />
          <label htmlFor="username" className="text">
            USERNAME(*)
          </label>
          <br />
          <input type="text" id="username" className="input" /> <br />
          <label htmlFor="password" className="text">
            PASSWORD(*)
          </label>{' '}
          <br />
          <input type="text" id="password" className="input" /> <br />
          <div className="subButton">
            <button type="button" className="customerSubmit">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default AdminRegister

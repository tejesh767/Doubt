import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import CustomerLogin from './Frontend/CustomerLogin'
import CustomerRegister from './Frontend/CustomerRegister'
import AdminRegister from './Frontend/AdminRegister'
import AdminLogin from './Frontend/AdminLogin'
import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/customerLogin" component={CustomerLogin} />
        <Route exact path="/registerCustomer" component={CustomerRegister} />
        <Route exact path="/registerAdmin" component={AdminRegister} />
        <Route exact path="/loginAdmin" component={AdminLogin} />
      </Switch>
    )
  }
}

export default App

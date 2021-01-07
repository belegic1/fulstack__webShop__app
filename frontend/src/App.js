import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavbarOne from './screens/NavbarOne'
import NavbarTwo from './screens/NavbarTwo'
import Home from './screens/Home'
import Footer from './screens/Footer'
const App = () => {
  return (
    <div>
      <Router>
        <NavbarOne/>
        <NavbarTwo />
        <Switch>
        <Route exact path='/' component={Home}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App

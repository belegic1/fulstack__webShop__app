import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import NavbarOne from './screens/NavbarOne'
import NavbarTwo from './screens/NavbarTwo'

const App = () => {
  return (
    <div>
      <Router>
        <NavbarOne/>
        <NavbarTwo />
      </Router>
    </div>
  )
}

export default App

import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import NavbarOne from './screens/NavbarOne'
import NavbarTwo from './screens/NavbarTwo'
import Home from './screens/Home'
import Footer from './screens/Footer'
import Shop from './screens/Shop'
import Product from './screens/Product'
import Cart from './screens/Cart'
import Contact from './screens/Contact'
import Register from './screens/Register'
import Login from './screens/Login'
import Account from './screens/Account'
import MyOrders from './screens/MyOrders'
import Payment from './screens/Payment'
import Confirm from './screens/Confirm'
import EditAccount from './screens/EditAccount'
import ChangePassword from './screens/ChangePassword'
import DeleteAccount from './screens/DeleteAccount'
const App = () => {
  return (
    <div>
      <Router>
        <NavbarOne/>
        <NavbarTwo />
        <Switch>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/product' component={Product}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/account' component={Account}/>
        <Route exact path='/orders' component={MyOrders}/>
        <Route exact path='/payment' component={Payment}/>
        <Route exact path='/confirm' component={Confirm}/>
        <Route exact path='/account/edit' component={EditAccount}/>
        <Route exact path='/account/changePassword' component={ChangePassword}/>
        <Route exact path='/account/delete' component={DeleteAccount}/>
        <Route exact path='/' component={Home}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App

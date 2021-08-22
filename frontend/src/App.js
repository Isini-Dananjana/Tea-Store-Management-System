import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import adminHome from './components/adminHome'
import Home from "./components/Home/Home";
import Navbar from "./components/nav bar/Navbar";
import Cart from "./components/ShoppingCart/Cart";
import Header from "./components/header/Header";
import AddProducts from "./components/products/addProduct"
import AdminOrders from "./components/adminOrders/orders"
import AwaitingPayments from './components/adminOrders/AwitingPayments';
import AwaitingDelivery from './components/adminOrders/AwitingDelivery';
import Paid from './components/adminOrders/PaidnDelivered';
// import AllExpenses from './components/Expenses/AllExpenses';
// import AddExpenses from './components/AddExpenses/AddExpenses';
// import SearchUser from './components/SearchUser/SearchUser';
// import Login from './components/Login/Login';


class App extends Component {
  render() {
      return (
          <Router>
              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/cart" exact component={Cart}/>
                  
                  <Route path = "/adminHome" component = {adminHome}></Route>
                  <Route path = "/addProducts" component = {AddProducts}></Route>
                  <Route path = "/allOrders" component = {AdminOrders}></Route>
                  <Route path = "/awaitingPayments" component = {AwaitingPayments}></Route>
                  <Route path = "/awaitingDelivery" component = {AwaitingDelivery}></Route>
                  <Route path = "/paid" component = {Paid}></Route>
                  {/* <Route path = "/expenses" exact component={AllExpenses}></Route>
                  <Route path = "/addExpenses" exact component={AddExpenses}></Route>
                  <Route path = "/searchUser" exact component={SearchUser}></Route>
                  <Route path = "/login" exact component={Login}></Route> */}
              </Switch>
          </Router>
          );
  }

}

export default App;

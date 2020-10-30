import React, { Component } from 'react';

import Navbar from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import AppTodo from './pages/Todo/AppTodo';
import Post from './pages/Post';
import ShoppingCart from './pages/ShoppingCart'

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/todos' component={AppTodo} />
          <Route path='/post/:post_id' component={Post} />
          <Route path="/shopping-cart" component={ShoppingCart} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
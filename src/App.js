import React, { Component } from 'react';

import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import AppTodo from './pages/Todo/AppTodo';
import Post from './pages/Post';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/todos' component={AppTodo} />
          <Route path='/:post_id' component={Post} />
      </BrowserRouter>
    )
  }
}

export default App;
import React, { Component } from 'react';

import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import AppTodo from './pages/Todo/AppTodo';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/todos' component={AppTodo} />
      </BrowserRouter>
    )
  }
}

export default App;
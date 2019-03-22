import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch , Route} from 'react-router-dom';


import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import photos from './components/photos';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        {/* <h1>Welcome to react</h1> */}

        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/photos" component={photos}/>
        </Switch>

      </div>
    );
  }
}

export default App;

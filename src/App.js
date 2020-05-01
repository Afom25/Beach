import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
  <Route exact path="/room" component={Room}/>
  <Route exact path="/room:slug" component={SingleRoom}/>
  <Route exact path="/erros" component/>
    <Route component={Error}/>
      </Switch>
   
  </Router>
  );
}

export default App;

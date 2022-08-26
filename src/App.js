import React from 'react';
import './App.css';
import Login from './pages/Login';
import XMenList from './pages/XMenPage'
import { Route, Routes as Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
          <Switch>
            <Route path="/" element={ <Login /> } />
            <Route path="/search" element={ <XMenList /> } />
          </Switch>
      </div>
    );
  }
}

export default App;

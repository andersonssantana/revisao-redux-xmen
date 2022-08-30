import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import XMenList from './pages/XMenPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Login } /* element={ <Login /> } */ />
          <Route path="/search" component={ XMenList } /* element={ <XMenList /> } */ />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
import Login from './pages/Login';
import XMenList from './pages/XMenPage'
import { Route, Routes } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Provider store={ store }>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/search" element={ <XMenList /> } />
          </Routes>
        </Provider>
      </div>
    );
  }
}

export default App;

import React from 'react';
import LoginForm from '../components/LoginForm';
import Title from '../components/Title';

class Login extends React.Component {
  render() {
    return (
      <main className="mainLogin">
        <Title />
        <LoginForm />
      </main>
    );
  }
}

export default Login;

import React from 'react';
import { Navigate as Redirect } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    inputUserName: '',
    submitted: false
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    this.setState({ submitted: true });
  }

  render() {
    const { inputUserName, submitted } = this.state;
    
    if (submitted) return <Redirect to="/search" />
    return (
      <section>
        <form>
          <label htmlFor="inputUserName">
            Nome
            <input
              type="text"
              name="inputUserName"
              id="inputUserName"
              placeholder="Digite seu nome"
              onChange={ this.handleChange }
              value={ inputUserName }
            />
          </label>

          <button
            type="button"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
        <small className="slogan">
          Entre e busque seus X-Men favoritos
        </small>
      </section>
    );
  }
}

export default LoginForm;

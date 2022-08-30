import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../redux/actions/loginActions';

class LoginForm extends React.Component {
  state = {
    inputUserName: '',
    submitted: false,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { login } = this.props;
    const { inputUserName } = this.state;
    login(inputUserName);
    this.setState({ submitted: true });
  };

  validateButton = () => {
    const minLength = 3;
    const { inputUserName } = this.state;
    const validation = inputUserName.length > minLength;
    return validation;
  };

  render() {
    const { inputUserName, submitted } = this.state;

    if (submitted) return <Redirect to="/search" />;
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
            disabled={ !this.validateButton() }
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

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(loginAction(userData)),
});

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginForm);

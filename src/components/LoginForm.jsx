import React from 'react';
import { connect } from 'react-redux';
import { Navigate as Redirect } from 'react-router-dom';
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
    const { inputUserName } = this.state;
    // const { dispatch } = this.props;
    // dispatch(loginAction(inputUserName));
    const { logUser } = this.props;
    logUser(inputUserName);
    this.setState({ submitted: true });
  };

  validateButton = () => {
    const { inputUserName } = this.state;
    const minLength = 3;
    return inputUserName.length > minLength;
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

LoginForm.propTypes = {
  logUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logUser: (inputUserName) => dispatch(loginAction(inputUserName)),
});

export default connect(null, mapDispatchToProps)(LoginForm);

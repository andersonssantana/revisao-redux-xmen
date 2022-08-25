import React from 'react';
import { Navigate as Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import loginAction from '../redux/actions/loginActions';

class LoginForm extends React.Component {
  state = {
    inputUserName: '',
    submitted: false
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { inputUserName } = this.state;
    const { submitUserInfo } = this.props;
    submitUserInfo(inputUserName);
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

const mapDispatchToProps = (dispatch) => ({
  submitUserInfo: (username) => dispatch(loginAction(username)),
})

export default connect(null, mapDispatchToProps)(LoginForm);

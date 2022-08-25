import React from 'react';
import { connect } from 'react-redux';

class UserInfo extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <h1>Bem vindo(a) { username }</h1>
    )
  }
}

const mapStateToProps = ({ loginReducer }) => ({
  username: loginReducer.username,
})

export default connect(mapStateToProps)(UserInfo);

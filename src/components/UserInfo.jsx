import React from 'react';

class UserInfo extends React.Component {
  render() {
    const { username = 'undefined' } = this.props;
    return (
      <h1>
        Bem vindo(a)
        { username }
      </h1>
    );
  }
}

export default UserInfo;

import React from 'react';
import PropTypes from 'prop-types';

class UserInfo extends React.Component {
  render() {
    const { username } = this.props;
    return (
      <h1>
        Bem vindo(a)
        {' '}
        { username }
      </h1>
    );
  }
}

UserInfo.propTypes = {
  username: PropTypes.string,
};

UserInfo.defaultProps = {
  username: 'undefined',
};

export default UserInfo;

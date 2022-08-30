import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
  username: state.loginReducer.userName,
});

UserInfo.propTypes = {
  username: PropTypes.string,
};

UserInfo.defaultProps = {
  username: 'undefined',
};

export default connect(mapStateToProps)(UserInfo);

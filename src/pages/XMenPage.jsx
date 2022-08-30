import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import PageContent from '../components/PageContent';
import { fetchAPI } from '../redux/actions/charactersActions';

class XMenList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAPI());
  }

  render() {
    return (
      <main className="charactersMain">
        <UserInfo />
        <PageContent />
      </main>
    );
  }
}

XMenList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(XMenList);

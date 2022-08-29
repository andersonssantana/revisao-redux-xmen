import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import PageContent from '../components/PageContent';
import fetchCharactersAction from '../redux/actions/charactersActions';

class XMenList extends React.Component {
  componentDidMount() {
    const { fetchXmenApi } = this.props;
    fetchXmenApi();
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
  fetchXmenApi: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchXmenApi: () => dispatch(fetchCharactersAction()),
});

export default connect(null, mapDispatchToProps)(XMenList);

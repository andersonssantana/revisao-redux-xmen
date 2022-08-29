import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import UserInfo from '../components/UserInfo';
import PageContent from '../components/PageContent';
import fetchCharactersAction from '../redux/actions/charactersActions';

class XMenList extends React.Component {
  componentDidMount() {
    const { fetchCharacters } = this.props;
    fetchCharacters();
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
  fetchCharacters: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCharacters: () => dispatch(fetchCharactersAction()),
});

export default connect(null, mapDispatchToProps)(XMenList);

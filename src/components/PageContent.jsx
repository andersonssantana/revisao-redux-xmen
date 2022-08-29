import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from './Card';

class PageContent extends React.Component {
  state = {
    searchBar: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { searchBar } = this.state;
    const { characters, loading, error } = this.props;

    const filteredCharacters = characters
      .filter((character) => (
        character.alias.toLowerCase().includes(searchBar.toLowerCase())
        || character.name.toLowerCase().includes(searchBar.toLowerCase())
      ));

    if (error) console.error(error);

    return (
      <div className="contentContainer">
        <section className="searchBarContainer">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            placeholder="Pesquise aqui"
            value={ searchBar }
            onChange={ this.handleChange }
          />
        </section>
        <section className="cardsContainer">
          {
            loading ? (
              <p>
                Carregando...
              </p>
            ) : (
              filteredCharacters.map((card) => <Card key={ card.id } card={ card } />)
            )
          }
        </section>
      </div>
    );
  }
}

PageContent.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({})),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

PageContent.defaultProps = {
  characters: [],
  loading: false,
  error: '',
};

const mapStateToProps = (state) => ({
  loading: state.xmen.loading,
  characters: state.xmen.characters,
  error: state.xmen.error,
});

export default connect(mapStateToProps)(PageContent);

import { connect } from 'react-redux';
import React from 'react';
import Card from './Card';

class PageContent extends React.Component {
  state = {
    searchBar: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { loading, error, characters } = this.props;
    const { searchBar } = this.state;
    const filteredCharacters = characters
      .filter((character) => (
        character.alias.toLowerCase().includes(searchBar.toLowerCase()) ||
        character.name.toLowerCase().includes(searchBar.toLowerCase())
       ) )

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
    )
  }
}

const mapStateToProps = ({ charactersReducer }) => {
  return ({
    characters: charactersReducer.characters,
    loading: charactersReducer.loading,
    error: charactersReducer.error,
  })
}

export default connect(mapStateToProps)(PageContent);

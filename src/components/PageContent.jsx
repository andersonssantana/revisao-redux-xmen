import React from 'react';
import Card from './Card';

class PageContent extends React.Component {
  state = {
    searchBar: '',
    loading: false,
    characters: [
      {
        id: 2,
        name: 'Logan',
        alias: 'Wolverine',
        description: 'He is a member of the X-Men. He has a mysterious and confused past',
        powers: [
          'Healing Factor',
          'Animal-Like Senses',
          'Adamantium Claws and Skeleton'
        ],
        img: 'https://cdn.glitch.com/6137de19-12c5-43e0-9704-2252d809dcfb%2Fwolverine.png',
        affiliation: 'X-Men',
        created: '2020-12-26T19:48:56.843Z'
      }
    ]
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { searchBar, characters, loading } = this.state;

    const filteredCharacters = characters
      .filter((character) => (
        character.alias.toLowerCase().includes(searchBar.toLowerCase()) ||
        character.name.toLowerCase().includes(searchBar.toLowerCase())
       ) )

    // if (error) console.error(error);

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

export default PageContent;

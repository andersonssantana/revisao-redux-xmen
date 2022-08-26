import React from 'react';
import Card from './Card';

class PageContent extends React.Component {
  state = {
    searchBar: '',
    loading: false,
    characters: [
      {
        id: 1,
        name: 'Ander Santana',
        alias: 'Ander',
        description: 'Ihhhh alá, o Ander tá achando que faz parte dos X-Men...',
        powers: [
          'Mentoria de revisão',
          'Criação de background de Zoom',
        ],
        img: 'https://i.imgur.com/Eif3vow.png',
        affiliation: 'Trybe',
        created: '2020-12-26T19:48:56.843Z'
      },
      {
        id: 2,
        name: 'Marcelo Pessini',
        alias: 'Pessini',
        description: 'É, galera. O nome do Pessini é Marcelo mesmo.',
        powers: [
          'Mentoria de revisão',
          'Olhos de águia',
        ],
        img: 'https://i.imgur.com/5PvTite.png',
        affiliation: 'Trybe',
        created: '2020-12-26T19:48:56.843Z'
      }
    ]
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { searchBar, characters = [], loading } = this.state;

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

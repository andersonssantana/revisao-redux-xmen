const fetchCharacters = async () => {
  const response = await fetch('https://xmenapiheroku.herokuapp.com/api/characters');
  const data = await response.json();
  
  return data.results;
}

export default fetchCharacters;
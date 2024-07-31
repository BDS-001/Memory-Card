import { useState, useEffect } from 'react'
import CardList from './Cards';
import pokemonList from './PokemonList';
import '../styles/App.css'

async function fetchPokemonData(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

async function processPokemonList(pokemonList) {
  const pokePromises = await pokemonList.map(pokemon => fetchPokemonData(pokemon))
  const pokemonData = await Promise.all(pokePromises)
  return pokemonData.map(({ id, name, sprites }) => ({
    id,
    name,
    img: sprites.front_default,
  }));
}

function shuffleCards(cards) {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const pokemonCardData = await processPokemonList(pokemonList);
        setCards(shuffleCards(pokemonCardData));
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
    getData()
  }, [])

  if (loading) return <div className="loading-screen">Loading...</div>
  if (error) return <div className="error-screen">{error}</div>

  return (
    <>
      <header><h1>Memory Game</h1></header>
      <CardList cards={cards} />
    </>
  )
}

export default App

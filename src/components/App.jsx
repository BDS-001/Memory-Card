import { useState, useEffect } from 'react'
import CardList from './Cards';
import pokemonList from './PokemonList';
import ScoreBoard from './ScoreBoard';
import Rules from './Rules'
import '../styles/App.css'

async function fetchPokemonData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

async function processPokemonList(pokemonList) {
  const pokePromises = await pokemonList.map(pokemon => fetchPokemonData(`https://pokeapi.co/api/v2/pokemon/${pokemon}`))
  const pokemonData = await Promise.all(pokePromises)
  const fullPokemonData = await Promise.all(pokemonData.map(async (pokemon) => {
    const speciesData = await fetchPokemonData(pokemon.species.url);
    return { ...pokemon, speciesData };
  }));
  return fullPokemonData.map(({ id, name, sprites, stats, types, speciesData }) => ({
    id,
    name,
    img: sprites.front_default,
    hp: stats.find(stat => stat.stat?.name === 'hp')?.base_stat,
    types: types.map(type => type.type.name),
    description: speciesData.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text
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
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [usedCards, setUsedCards] = useState(new Set)


  function cardClick(e) {
    const cardId = e.currentTarget.dataset.id
    if (usedCards.has(cardId)) {
      if (score > highScore) setHighScore(score)
      setScore(0)
      setUsedCards(new Set)
    } else {
      setScore(prevScore => prevScore + 1)
      setUsedCards(prevCards => new Set(prevCards).add(cardId))
    }
    setCards(shuffleCards(cards))
  }

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

  if (loading) return <div className="loading-screen"><h1>Loading...</h1></div>
  if (error) return <div className="error-screen">{error}</div>

  return (
    <>
      <header><h1 className='title'>Pokémon Card Memory Game</h1></header>
      <Rules/>
      <ScoreBoard score={score} highScore={highScore} />
      <CardList cards={cards} cardClick={cardClick} />
    </>
  )
}

export default App

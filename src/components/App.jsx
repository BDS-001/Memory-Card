import { useState } from 'react'
import { v4 as uuid } from 'uuid';
import CardList from './Cards';
import '../styles/App.css'

function App() {
  const initialCards = [
    {id: uuid(), title: 'pikachu', img: '/public/card_images/pikachu.png'},
    {id: uuid(), title: 'snorlax', img: '/public/card_images/snorlax.png'}
  ]

  const shuffleCards = (cards) => {
      const shuffled = [...cards];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
  }

  const [cards, setCards] = useState(shuffleCards(initialCards))

  return (
    <>
      <header><h1>Memory Game</h1></header>
      <CardList cards={cards} />
    </>
  )
}

export default App

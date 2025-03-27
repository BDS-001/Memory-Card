# Pokémon Card Memory Game

A fun memory card game built with React that tests your ability to remember which Pokémon cards you've already clicked.

## 🎮 How to Play

1. You will be presented with a grid of Pokémon cards
2. Click on a card to earn a point
3. The cards will shuffle after each click
4. Try to click as many different cards as you can without clicking the same card twice
5. If you click a card you've already selected, your score resets to zero
6. Try to beat your high score!

## ✨ Features

- **Dynamic Card Generation**: Fetches random Pokémon data from the PokéAPI
- **Real-time Score Tracking**: Keeps track of your current score and high score
- **Card Shuffling**: Cards shuffle after each click to increase the challenge
- **Responsive Design**: Playable on both desktop and mobile devices
- **Attractive UI**: Styled Pokémon cards with type-specific colors
- **Loading State**: Visual feedback while the application fetches Pokémon data

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **Vite**: Build tool and development server
- **CSS Modules**: For component-scoped styling
- **PokéAPI**: External API for Pokémon data
- **useState & useEffect Hooks**: For state management and side effects

## 📋 Project Structure

```
pokemon-memory-game/
├── public/
│   └── card_images/
│       └── cardImageBackground.png
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   ├── Cards.jsx
│   │   ├── PokemonList.jsx
│   │   └── ScoreBoard.jsx
│   ├── styles/
│   │   ├── App.css
│   │   ├── Cards.css
│   │   ├── index.css
│   │   └── ScoreBoard.css
│   └── main.jsx
├── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pokemon-memory-game.git
cd pokemon-memory-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🧠 Learning Outcomes

This project demonstrates:
- Using React hooks (useState, useEffect) for state management
- Fetching and processing data from an external API
- Creating reusable components
- Implementing game logic
- Styling with CSS
- Managing application state
- Handling user interactions

## 📝 Future Improvements

- Add difficulty levels with more cards
- Add sound effects
- Implement a timer mode
- Add animations for card flips
- Add a leaderboard with localStorage

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [PokéAPI Documentation](https://pokeapi.co/docs/v2)
- [Vite Documentation](https://vitejs.dev/guide/)
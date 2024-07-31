function genRandomPoke(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 1025) + 1;
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

const pokemonList = genRandomPoke(8)

export default pokemonList
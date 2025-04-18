import '/src/styles/Cards.css'

const pokemonTypeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD"
};

function Card({ id, name, img, hp, types, description, onClick }) {
  return (
    <div data-id={id} className="pokemon-card" onClick={onClick}>
      <div className="card-header" style={{backgroundColor: pokemonTypeColors[types[0]]}}>
        <span><b>{name}</b></span>
        <span>HP: {hp}</span>
      </div>
      <div className="pokemon-image">
        <img src={img} alt={name} />
      </div>
      <div className="pokemon-info" style={{backgroundColor: pokemonTypeColors[types[0]]}}>
        <p className='poke-description'>{description}</p>
      </div>
    </div>
  );
}

function CardList({ cards, cardClick}) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card 
          key={card.id}
          id={card.id}
          name={card.name} 
          img={card.img} 
          hp={card.hp} 
          types={card.types}
          description={card.description}
          onClick={cardClick}
        />
      ))}
    </div>
  );
}

export default CardList;
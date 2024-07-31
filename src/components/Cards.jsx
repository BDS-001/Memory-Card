import '/src/styles/Cards.css'

function Card({ name, img, hp, types }) {
  return (
    <div className="pokemon-card">
      <div className="card-header">
        <span>{name}</span>
        <span>HP: {hp}</span>
      </div>
      <div className="pokemon-image">
        <img src={img} alt={name} />
      </div>
      <div className="pokemon-info">
        <p>Type: {types.length === 1 ? `${types[0]}` : `${types[0]}, ${types[1]}` }</p>
        <p>Attack 1: Example Attack</p>
        <p>Attack 2: Another Attack</p>
      </div>
    </div>
  );
}

function CardList({ cards }) {
  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card 
          key={card.id} 
          name={card.name} 
          img={card.img} 
          hp={card.hp} 
          types={card.types} 
        />
      ))}
    </div>
  );
}

export default CardList;
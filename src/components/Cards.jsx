import '/src/styles/Cards.css'

const Card = ({ name, img }) => (
  <div className="pokemon-card">
  <div className="card-header">
      <span>{name}</span>
      <span>HP: 100</span>
  </div>
  <div className="pokemon-image">
      <img src={img} alt={name} />
  </div>
  <div className="pokemon-info">
      <p>Type: Example</p>
      <p>Attack 1: Example Attack</p>
      <p>Attack 2: Another Attack</p>
  </div>
</div>
);

const CardList = ({ cards }) => (
  <div className="card-list">
    {cards.map((card) => (
      <Card key={card.id} name={card.name} img={card.img} />
    ))}
  </div>
);

export default CardList;
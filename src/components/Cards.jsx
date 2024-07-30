const Card = ({ title, imagePath }) => (
  <div className="card">
    <img src={imagePath} alt={title} className="card-image" />
    <h3 className="card-title">{title}</h3>
  </div>
);

const CardList = ({ cards }) => (
  <div className="card-list">
    {cards.map((card, index) => (
      <Card key={index} title={card.title} imagePath={card.imagePath} />
    ))}
  </div>
);

export default CardList;
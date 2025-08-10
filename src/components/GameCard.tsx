type Game = {
  id: number;
  name: string;
  genre: string;
  description: string;
  releaseDate: string;
  image: string;
};

function GameCard({ game }: { game: Game }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={game.image} className="card-img-top" alt={game.name} />
      <div className="card-body">
        <h5 className="card-title">{game.name}</h5>
        <span className="badge bg-primary mb-2">{game.genre}</span>
        <p className="card-text">{game.description}</p>
        <small className="text-muted">Release: {game.releaseDate}</small>
      </div>
    </div>
  );
}

export default GameCard;

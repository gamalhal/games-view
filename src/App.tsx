import { useState } from "react";
import gamesData from "./gamesData";
import GameCard from "./components/GameCard";

const genres = ["All", "Action", "Adventure", "Puzzle", "Sports"];

function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredGames =
    selectedGenre === "All"
      ? gamesData
      : gamesData.filter((game) => game.genre === selectedGenre);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Latest Games</h1>
      <div className="mb-3">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`btn btn-outline-primary me-2 ${
              selectedGenre === genre ? "active" : ""
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <div className="row">
        {filteredGames.map((game) => (
          <div className="col-md-4 mb-4" key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
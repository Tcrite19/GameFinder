import axios from "axios";
import React, { useEffect, useState } from "react";
import GamesList from "./ui/GamesList";

const PopularGames = () => {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=eecda39a8cd346d4b7d2316212b63ccf&dates=${lastYear}-${month},${currentYear}-${month}&page_size=10&page=1`
    );

    const gamesData = data.results;

    setGames(gamesData);
  }

  console.log(games)

  const currentYear = new Date().getFullYear();

  const lastYear = currentYear - 1;

  const month = new Date().getMonth();

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section className="popular__games">
      <div className="container">
        <div className="row popular__games__row">
          <h1 className="popular__games__title">Popular Games</h1>
          <GamesList games={games}/>
        </div>
      </div>
    </section>
  );
};

export default PopularGames;

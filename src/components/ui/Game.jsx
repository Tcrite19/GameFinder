import React from "react";
import { Link } from "react-router-dom";

const Game = ({ game }) => {
  return (
    <div className="game__card">
      <figure className="game__card__img__wrapper">
        <img src={game.background_image} alt="" className="game__card__img" />
        <Link to={`/game/${game.id}`} className="game__card__details">
          <button className="learn-more">Learn More</button>
        </Link>
      </figure>
      <h3 className="game__card__title">{game.name}</h3>
    </div>
  );
};

export default Game;

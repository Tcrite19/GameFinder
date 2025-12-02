import React from "react";
import GameSkeleton from "./GameSkeleton";
import Game from "./Game";

const GamesList = ({ games }) => {

  return (
    <>
      <div className="games__list">
        {games.length > 0 ? 
        games?.map((game) => (
          <Game game={game} key={game.id} />
        ))
        : new Array(20).fill(0).map((_, index) => <GameSkeleton key={index}/>)
      }
      </div>
    </>
  );
};

export default GamesList;

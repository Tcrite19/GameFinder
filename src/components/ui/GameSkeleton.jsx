import React from "react";

const GameSkeleton = () => {
  return (
    <div className="game__card game__card--skeleton">
      <figure className="game__card__img__wrapper skeleton">
      </figure>
      <h3 className="game__card__title--skeleton skeleton"></h3>
    </div>
  );
};

export default GameSkeleton;

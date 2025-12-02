import React from "react";

const GamePageTopSkeleton = () => {
  return (
    <>
      <div className="game__top">
        <figure className="game__preview">
          <div className="game__img__wrapper">
            <div className="game__img--skeleton skeleton"></div>
          </div>
          <div className="game__preview__imgs">
            {new Array(7).fill(0).map((_, index) => (
              <div
                key={index}
                className="game__img__screenshot--skeleton skeleton"
              >
                New Thing
              </div>
            ))}
          </div>
        </figure>
        <div className="game__details">
          <div className="game__title--skeleton skeleton"></div>
          <div className="game__dev--skeleton skeleton"></div>
          <div className="game__description--skeleton ">
            <div className="game__description__para--skeleton skeleton"></div>
            <div className="game__description__para--skeleton skeleton"></div>
            <div className="game__description__para--skeleton skeleton"></div>
            <div className="game__description__para--skeleton skeleton"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GamePageTopSkeleton;

import React from "react";

const KeywordsSkeleton = ({ title, count }) => {
  return (
    <div className="game__keywords">
      <h1 className="game__keywords__title">{title}:</h1>
      <div className="game__keywords__list">
        {/* {keywords?.map((keyword) => (
          <h3 className="game__keyword" key={keyword.id}>
            {keyword.name}
          </h3>
        ))} */}
        {
            new Array(count).fill(0).map((_, index) => <div className="game__keyword--skeleton skeleton" key={index}></div>)
        }
      </div>
    </div>
  );
};

export default KeywordsSkeleton;

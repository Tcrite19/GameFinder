import React from "react";

const Keywords = ({ keywords, title }) => {
  return (
    <>
      <div className="game__keywords">
        <h1 className="game__keywords__title">{title}: </h1>
        <div className="game__keywords__list">
          {keywords?.map((keyword) => (
            <h3 className="game__keyword" key={keyword.id}>
              {keyword.name}
            </h3>
          ))}
        </div>
      </div>
    </>
  );
};

export default Keywords;

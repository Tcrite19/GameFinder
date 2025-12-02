import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavLogo from "../assets/nav-logo.png";
import GamesList from "../components/ui/GamesList";
import Keywords from "../components/ui/Keywords";
import { AppContext } from "../context/AppContext";
import GamePageTopSkeleton from "../components/GamePageTopSkeleton";
import KeywordsSkeleton from "../components/ui/KeywordsSkeleton";

const GamePage = () => {
  const { id } = useParams();
  const [selectedGame, setSelectedGame] = useState(null);
  const [reccomendedGames, setReccomendedGames] = useState([]);
  const [selectedGameSS, setSelectedGameSS] = useState([]);
  const [selectedImg, setSelectedImg] = useState("Hi");
  const [loading, setLoading] = useState(false);
  const { api, apiKey } = useContext(AppContext);

  async function fetchGame() {
    try {
      const { data } = await axios.get(` ${api}games/${id}${apiKey}`);

      const gamesData = data;

      setSelectedGame(gamesData);

      setSelectedImg(gamesData.background_image);

      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  async function fetchReccomendations() {
    try {
      const { data } = await axios.get(
        ` ${api}games/${id}/game-series${apiKey}`
      );

      const gamesData = data.results;

      setReccomendedGames(gamesData);
    } catch (error) {
      alert(error);
    }
  }

  async function fetchGameSc() {
    try {
      const { data } = await axios.get(
        `${api}games/${id}/screenshots${apiKey}`
      );

      const gameSS = data.results;

      setSelectedGameSS(gameSS);

      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetchGame();
    fetchReccomendations();
    fetchGameSc();
  }, [id]);

  //  Stop page from rendering after clicking a screenshot

  return (
    <section id="game__page">
      <div className="container">
        <div className="row game__row">
          {loading ? (
            <GamePageTopSkeleton />
          ) : (
            <div className="game__top">
              <figure className="game__preview">
                <div className="game__img__wrapper">
                  <img src={selectedImg} alt="" className="game__img" />
                </div>
                <div className="game__preview__imgs">
                  <img
                    src={selectedGame?.background_image}
                    alt=""
                    className="game__img__screenshot"
                    onClick={() =>
                      setSelectedImg(selectedGame?.background_image)
                    }
                  />
                  {selectedGameSS.map((screenshot, index) => (
                    <img
                      src={screenshot.image}
                      alt=""
                      className="game__img__screenshot"
                      onClick={() => setSelectedImg(screenshot.image)}
                      key={index}
                    />
                  ))}
                </div>
              </figure>
              <div className="game__details">
                <h1 className="game__title">{selectedGame?.name}</h1>
                <h4 className="game__dev">
                  Created by {selectedGame?.developers[0].name}
                </h4>
                <p className="game__description">
                  {selectedGame?.description_raw}
                </p>
              </div>
            </div>
          )}
          {loading ? (
            <div className="game__middle">
              <KeywordsSkeleton title={"Genres"} count={3} />
              <KeywordsSkeleton title={"Tags"} count={14} />
            </div>
          ) : (
            <div className="game__middle">
              <Keywords title={"Genres"} keywords={selectedGame?.genres} />
              <Keywords title={"Tags"} keywords={selectedGame?.tags} />
            </div>
          )}
          <div className="game__bottom">
            <h1 className="games__reccomendations__title">
              Games you might like:
            </h1>
            <GamesList games={reccomendedGames} />
          </div>
          {/* <div className="row game__row">
  
          <div className="game__top">
            <figure className="game__preview">
              <div className="game__img__wrapper">
                <img src={selectedImg} alt="" className="game__img" />
              </div>
              <div className="game__preview__imgs">
                <img
                  src={selectedGame?.background_image}
                  alt=""
                  className="game__img__screenshot"
                  onClick={() => setSelectedImg(selectedGame?.background_image)}
                />
                {selectedGameSS.map((screenshot, index) => (
                  <img
                    src={screenshot.image}
                    alt=""
                    className="game__img__screenshot"
                    onClick={() => setSelectedImg(screenshot.image)}
                    key={index}
                  />
                ))}
              </div>
            </figure>
            <div className="game__details">
              <h1 className="game__title">{selectedGame?.name}</h1>
              <h4 className="game__dev">
                Created by {selectedGame?.developers[0].name}
              </h4>
              <p className="game__description">
                {selectedGame?.description_raw}
              </p>
            </div>
          </div>
          <div className="game__middle">
            <Keywords title={"Genres"} keywords={selectedGame?.genres} />
            <Keywords title={"Tags"} keywords={selectedGame?.tags} />
          </div>
          <div className="game__bottom">
            <h1 className="games__reccomendations__title">
              Games you might like:
            </h1>
            <GamesList games={reccomendedGames} />
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default GamePage;

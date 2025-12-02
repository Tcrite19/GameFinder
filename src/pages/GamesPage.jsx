import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Game from "../components/ui/game";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import GamesList from "../components/ui/GamesList";
import { AppContext } from "../context/AppContext";

const GamesPage = () => {
  let { id } = useParams();
  const [games, setGames] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [genreOn, setGenreOn] = useState("");
  const [genres, setGenres] = useState([""]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const { searchValue, setSearchValue, api, apiKey } = useContext(AppContext);

  async function genreStatus() {
    if (selectedGenre == "") {
      setGenreOn("");
      console.log(selectedGenre);
      console.log(genreOn);
    } else {
      setGenreOn("genres=");
      console.log(selectedGenre);
      console.log(genreOn);
    }
  }

  async function fetchGames() {
    try {
      const { data } = await axios.get(
        `${api}games${apiKey}&page=${pageNum}&${genreOn}${selectedGenre}&search=${searchValue}&`
      );

      const gamesData = data.results;

      setGames(gamesData);
    } catch (error) {
      alert(error);
    }
  }

  async function fetchTags() {
    const { data } = await axios.get(`${api}genres${apiKey}`);

    const genresData = data.results;

    setGenres(genresData);
  }

  useEffect(() => {
    genreStatus();
    fetchGames();
    fetchTags();
  }, [id, pageNum, selectedGenre, searchValue, genreOn]);

  return (
    <section className="games__page">
      <div className="container">
        <div className="row games__page__row">
          <div className="games__page__top">
            <div className="games__page__searchBar">
              <input
                type="text"
                placeholder="Search for games"
                className="games__page__searchBar"
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </div>
            <div className="games__page__top__filter">
              <select
                value={selectedGenre}
                onChange={(event) => {
                  setSelectedGenre(event.target.value);
                }}
                className="games__page__filter"
              >
                <option className="games__page__filter__option" value="">
                  Select a Genre
                </option>
                {genres?.map((genre) => (
                  <option
                    className="games__page__filter__option"
                    value={genre.slug}
                    key={genre.id}
                  >
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <GamesList games={games} />
          <div className="page__directory">
            <button
              className="page__direction"
              onClick={() => setPageNum(pageNum - 1)}
            >
              <FontAwesomeIcon icon={faBackward} />
            </button>
            <h3 className="page__number">{pageNum}</h3>
            <button
              className="page__direction"
              onClick={() => setPageNum(pageNum + 1)}
            >
              <FontAwesomeIcon icon={faForward} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesPage;

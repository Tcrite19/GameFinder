import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/Nav";
import GamePage from "./pages/GamePage";
import GamesPage from "./pages/GamesPage";
import { AppContext } from "./context/AppContext";
import Background from "./assets/GameFinder-background.jpg";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const api = "https://api.rawg.io/api/";
  const apiKey = "?key=eecda39a8cd346d4b7d2316212b63ccf";

  return (
    <AppContext.Provider value={{ searchValue, setSearchValue, api, apiKey }}>
      <Router>
        <div className="background__img">
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<GamePage />} />
            <Route path="/games" element={<GamesPage />} />
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

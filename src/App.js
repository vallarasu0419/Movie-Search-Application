import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingScreen from "./Pages/LandingScreen";
import MovieList from "./Pages/MovieList";
import MovieDetails from "./Pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingScreen />}>
            <Route index element={<MovieList />} />
            <Route path="/movieDetails" element={<MovieDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

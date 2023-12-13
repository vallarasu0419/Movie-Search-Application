import React from "react";
import { useRoutes } from "react-router-dom";
import MovieList from "./Pages/MovieList";
import LandingScreen from "./Pages/LandingScreen";
import MovieDetails from "./Pages/MovieDetails";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <LandingScreen />,
      children: [
        { path: "movieList", element: <MovieList /> },
        { path: "movieDetails", element: <MovieDetails /> },
      ],
    },
  ]);
}

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import bgImg from "../Assets/movie.jpg";
import { useNavigate } from "react-router-dom";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "40px",
  },
});

function MovieList() {
  const API_KEY = "80f5dfd6a54f5ac300eba1c8ca1bc325";
  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const moviesPerPage = 6;
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const getMovieList = async () => {
    try {
      const response = await axios.get(`${API_URL}/trending/movie/day`, {
        params: {
          api_key: API_KEY,
          language: "en-US",
        },
      });
      setMovieList(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movieList.slice(indexOfFirstMovie, indexOfLastMovie);

  const filterData = useMemo(() => {
    const lowerCaseSearch = searchText.toLowerCase();
    return currentMovies.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseSearch) ||
        item.overview.toLowerCase().includes(lowerCaseSearch)
    );
  }, [searchText, currentMovies]);

  const handleNavigate = (movie) => {
    navigate("/movieDetails", { state: { data: movie } });
  };

  return (
    <Container>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <img
          src={bgImg}
          alt=""
          style={{ width: "100%", height: "400px", marginTop: "-100px" }}
        />
        <Box sx={{ position: "absolute", bottom: 30, left: 0, width: "100%" }}>
          <CustomTextField
            fullWidth
            style={{ backgroundColor: "#fff", borderRadius: "50px" }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Box>
      </Box>
      <Grid container spacing={2}>
        {filterData.map((movie) => (
          <Grid item xl={4} lg={4} md={4} sm={6} xs={12} key={movie.id}>
            <Card
              onClick={() => handleNavigate(movie)}
              style={{ width: "100%", height: "99%", cursor: "pointer" }}
              className="movie-card"
            >
              <div style={{ position: "relative" }}>
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />

                <div
                  className="slide-in-bottom"
                  style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    backdropFilter: "blur(5px)",
                    minHeight: "35%",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      color: "#18bbe6",
                      padding: "1%",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <br />
                  <Typography sx={{ padding: "1%" }}>
                    {movie.overview}
                  </Typography>
                </div>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 3 }} />
      <div style={{ textAlign: "center" }}>
        {Array.from({
          length: Math.ceil(movieList.length / moviesPerPage),
        }).map((_, index) => (
          <Button
            variant="outlined"
            key={index}
            className={`btn ${
              currentPage === index + 1 ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </Container>
  );
}

export default MovieList;

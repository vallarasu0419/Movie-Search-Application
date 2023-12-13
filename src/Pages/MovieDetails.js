import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import AdjustIcon from "@mui/icons-material/Adjust";

function MovieDetails() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  const boxStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${IMAGE_BASE_URL}${data.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "90vh",
    position: "relative",
    marginTop: "20px",
  };

  const posterStyle = {
    position: "absolute",
    top: "50%",
    left: "20%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    height: "auto",
    borderRadius: "20px",
    cursor: "pointer",
  };

  return (
    <Box style={boxStyle}>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <img
            src={`${IMAGE_BASE_URL}${data.poster_path}`}
            alt="poster"
            style={posterStyle}
          />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <Box sx={{ padding: "100px", color: "#fff" }}>
            <Typography
              variant="h4"
              style={{
                fontWeight: "600",
                wordSpacing: "10px",
                lineHeight: 2,
              }}
            >
              {data.title}
            </Typography>
            <Typography variant="h6" style={{ lineHeight: 2 }}>
              <AdjustIcon /> {data.release_date} &nbsp; &nbsp;
              <AdjustIcon /> {data.original_language} &nbsp; &nbsp;
              <AdjustIcon /> Drama, Mystery, Thriller, Science Fiction
            </Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: "700", lineHeight: 2 }}
            >
              Overview
            </Typography>
            <Typography variant="subtitle1">{data.overview}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MovieDetails;

import React from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useLocation } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const location = useLocation();
  const data = location.state?.data;

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
              }}
            >
              {data.title}
            </Typography>
            <Typography variant="h6" style={{ lineHeight: 2 }}>
              <AdjustIcon /> {data.release_date} &nbsp; &nbsp;
              <AdjustIcon /> {data.original_language} &nbsp; &nbsp;
              <AdjustIcon /> Drama, Mystery, Thriller, Science Fiction
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {["List", "Favorite", "Bookmark", "Star"].map((icon, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#032541",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <IconButton>
                    {icon === "List" && <ListIcon sx={{ color: "#fff" }} />}
                    {icon === "Favorite" && (
                      <FavoriteBorderIcon sx={{ color: "#fff" }} />
                    )}
                    {icon === "Bookmark" && (
                      <BookmarkBorderIcon sx={{ color: "#fff" }} />
                    )}
                    {icon === "Star" && (
                      <StarBorderIcon sx={{ color: "#fff" }} />
                    )}
                  </IconButton>
                </Box>
              ))}
              <Box>
                <IconButton>
                  <PlayCircleOutlineIcon
                    sx={{ color: "#fff", fontSize: "35px" }}
                  />
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: "600",
                      paddingLeft: "7px",
                    }}
                  >
                    Play Trailer
                  </Typography>
                </IconButton>
              </Box>
            </Box>

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
};

export default MovieDetails;

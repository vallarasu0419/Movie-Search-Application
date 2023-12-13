import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router-dom";

function TopNavbar() {
  const navigate = useNavigate();
  const handleNavigate = (movie) => {
    navigate("/", {});
  };
  return (
    <div style={{ backgroundColor: "black", color: "#fff" }}>
      <Grid container spacing={2}>
        <Grid item xl={4} lg={4} md={4} sm={4} xs={6}>
          <Typography
            variant="h5"
            style={{
              fontWeight: "800",
              padding: "20px",
              paddingLeft: "26%",
              cursor: "pointer",
            }}
            onClick={handleNavigate}
          >
            Logo
          </Typography>
        </Grid>

        {/* Hide this Grid on small screens */}
        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          sm={8}
          style={{
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
            alignSelf: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
              Movies
            </Typography>
            <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
              TV Shows
            </Typography>
            <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
              People
            </Typography>
            <Typography variant="subtitle1" style={{ cursor: "pointer" }}>
              More
            </Typography>
            <Avatar>M</Avatar>
          </Box>
        </Grid>

        {/* Show this IconButton on small screens */}
        {/* <Grid
          item
          xl={0}
          lg={0}
          md={0}
          sm={0}
          xs={6}
          style={{
            display: {
              xl: "none",
              lg: "none",
              md: "none",
              sm: "block",
              xs: "block",
            },
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default TopNavbar;

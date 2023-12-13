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
    <>
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

          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={6}
            sx={{
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
              <Typography
                className="navitem"
                variant="subtitle1"
                style={{ cursor: "pointer" }}
              >
                Movies
              </Typography>
              <Typography
                className="navitem"
                variant="subtitle1"
                style={{ cursor: "pointer" }}
              >
                TV Shows
              </Typography>
              <Typography
                className="navitem"
                variant="subtitle1"
                style={{ cursor: "pointer" }}
              >
                People
              </Typography>
              <Typography
                className="navitem"
                variant="subtitle1"
                style={{ cursor: "pointer" }}
              >
                More
              </Typography>
              <Avatar className="navitem">M</Avatar>
            </Box>
          </Grid>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={6}
            sx={{
              display: {
                xl: "none",
                lg: "none",
                md: "none",
                sm: "block",
                xs: "block",
              },
              alignSelf: "center",
            }}
          >
            <Box
              sx={{
                textAlign: "right",
                paddingRight: "50px",
              }}
            >
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default TopNavbar;

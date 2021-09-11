import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import hero from "../images/hero.png";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "3vh",
    padding: "0 5vw",
    height: "70vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
  t1: {
    fontFamily: "Alex Brush",
    fontSize: "1.9rem",
    fontWeight: "600",
    color: "#474BFF",
  },
  t3: {
    fontWeight: "600",
    lineHeight: "0.9em",
  },
  companies: {
    background: "#E7ECF6",
    display: "flex",
    justifyContent: "center",
  },
}));
function HeroSection() {
  const classes = useStyles();
  return (
    <Box className={classes.root} id="hero">
      <Box className={classes.text}>
        <Typography variant="h4" className={classes.t1}>
          Customize your Personal Space
        </Typography>
        <Typography variant="h1">DESIGN YOUR</Typography>
        <Typography variant="h1" className={classes.t3}>
          COMFORT ZONE
        </Typography>
        <Typography variant="h5" className={classes.t4}>
          Bringing your Dreams to Reality since 1976
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={hero} alt="hero" style={{ height: "40vh" }} />
        </div>
      </Box>
    </Box>
  );
}

export default HeroSection;

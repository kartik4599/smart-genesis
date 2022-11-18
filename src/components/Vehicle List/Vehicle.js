import { Button, Grid, Paper, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./Vehicle.module.css";

const Vehicle = () => {
  const [onOff, setonOff] = useState(false);
  const params = useParams();
  const arr = useSelector((state) => state.vehi.arr);

  useEffect(() => {
    const isOn = localStorage.getItem("offon");
    console.log(isOn);
    if (isOn) setonOff(true);
  }, []);

  console.log(arr);

  let obj = arr.filter((obj) => {
    return obj.key === params.vehicleId;
  });
  console.log(obj);

  // if (obj.length === 1) setLoading(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className={classes.vehicle}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className={classes.camera}>
            <p>Camera 1</p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className={classes.camera}>
            <p>Camera 2</p>
          </div>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <div className={classes.onOff}>
            <Button
              onClick={() => {
                setonOff(false);
                localStorage.setItem("offon", false);
              }}
              style={{ margin: "0px 10px" }}
              variant={onOff ? "outlined" : "contained"}
              color="error">
              Off
            </Button>
            <Button
              onClick={() => {
                setonOff(true);
                localStorage.setItem("offon", true);
              }}
              style={{ margin: "0px 10px" }}
              variant={onOff ? "contained" : "outlined"}
              color="success">
              On
            </Button>
          </div>
        </Grid>
        <Grid item sx={{ width: 700 }}>
          <div className={classes.name}>
            <h1>{obj[0].name}</h1>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.speed}>
            <Item>
              <h3>Average Speeds</h3>
              <h2>{obj[0].AvgSpeed} Km/hr</h2>
            </Item>
            <Item>
              <h3>Speeds</h3>
              <h2>{obj[0].speed} Km/hr</h2>
            </Item>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>Engine Status</h3>
            <h2>{obj[0].engine} </h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h3>Fuel Level</h3>
            <h2>{obj[0].fuel} </h2>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <h3>Temperature</h3>
            <h2>
              {obj[0].temperature} <sup>0</sup>C
            </h2>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default Vehicle;

import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { VehiAction } from "../../context/Vehicle-Redux";
import classes from "./AddVechicle.module.css";

const AddVehicle = () => {
  const [condition, setContition] = useState("Good Condition");
  const [fuel, setFuel] = useState("medium");
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState(60);
  const [avgSpeed, setavgSpeed] = useState(45);
  const [temperature, setTemperature] = useState(24);
  const dispatch = useDispatch();

  const engine = [
    "Bad Condition",
    "Good Condition",
    "Better Condition",
    "Best Condition",
  ];

  const fuelLevel = ["Low", "medium", "Full"];

  const handleChange = (e) => {
    setContition(e.target.value);
  };
  const fuelHandle = (e) => {
    setFuel(e.target.value);
  };
  const nameHandle = (e) => {
    setName(e.target.value);
  };
  const speedHandle = (e) => {
    setSpeed(e.target.value);
  };
  const avgspeedHandle = (e) => {
    setavgSpeed(e.target.value);
  };
  const temperatureHandle = (e) => {
    setTemperature(e.target.value);
  };

  const submitHandler = async () => {
    if (name === "") {
      window.alert("Enter Vehicle Name");
    } else {
      const obj = {
        name: name,
        engine: condition,
        fuel: fuel,
        speed: speed,
        AvgSpeed: avgSpeed,
        temperature: temperature,
      };
      dispatch(VehiAction.addOne(obj));
      const res = await fetch(
        "https://vehicle-in-default-rtdb.asia-southeast1.firebasedatabase.app/vehicleList.json",
        {
          method: "POST",
          body: JSON.stringify(obj),
        }
      );
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        window.alert("Vehicle Is Added");
      } else {
        console.log(res);
      }
    }

  };

  return (
    <div className={classes.form}>
      <h2>Add New Vehicle Information</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <div>
          <TextField
            required
            value={name}
            onChange={nameHandle}
            id="outlined-required"
            label="Name of Vehicle"
            placeholder="eg. Tata Nano"
          />
          <br />
          <TextField
            id="outlined-select-currency"
            select
            label="Engine Status"
            value={condition}
            onChange={handleChange}
            helperText="Please select your Engine Condition">
            {engine.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Fuel Level"
            value={fuel}
            onChange={fuelHandle}
            helperText="Please select your Engine Condition">
            {fuelLevel.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <TextField
            required
            id="outlined-number"
            label="Speed"
            type="number"
            value={speed}
            onChange={speedHandle}
            placeholder="Speed in km/hr"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="outlined-number"
            label="Average Speed"
            type="number"
            value={avgSpeed}
            onChange={avgspeedHandle}
            placeholder="Speed in km/hr"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br />
          <TextField
            required
            id="outlined-search"
            label="Temperature"
            value={temperature}
            onChange={temperatureHandle}
            placeholder="In celsius"
            type="number"
          />
        </div>
      </Box>
      <Button
        style={{ margin: "20px 0px" }}
        onClick={submitHandler}
        variant="contained">
        {" "}
        Add New Vehicle{" "}
      </Button>
    </div>
  );
};

export default AddVehicle;

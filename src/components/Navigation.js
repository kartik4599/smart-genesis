import classes from "./Navigation.module.css";
import logo from "../assets/logo.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={classes.nav}>
      <img src={logo} alt="logo" height="100" />
      <h3>Navigation</h3>
      <ul>
        <li>
          <Link to={"/VehicleList"}>
            <Button variant="outlined">Vehicle List</Button>
          </Link>
        </li>
        <li>
          <Link to={"/AddVehicle"}>
            <Button variant="outlined">Add Vehicle</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

import { Redirect, Route, Switch } from "react-router-dom";
import AddVehicle from "./Add Vehicle/AddVehicle";
import classes from "./Main.module.css";
import Vehicle from "./Vehicle List/Vehicle";
import VehicleList from "./Vehicle List/VehicleList";
const Main = () => {
  return (
    <div className={classes.main}>
      <Switch>
        <Route path={"/AddVehicle"}>
          <AddVehicle />
        </Route>
        <Route path={"/VehicleList/:vehicleId"} exact>
          <Vehicle />
        </Route>
        <Route path={"/VehicleList"}>
          <VehicleList />
        </Route>
        <Route path={"*"}>
          <Redirect to="VehicleList" />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;

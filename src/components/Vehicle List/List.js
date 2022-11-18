import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { VehiAction } from "../../context/Vehicle-Redux";
import classes from "./List.module.css";

const List = ({ obj }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const deleteHandler = async () => {
    dispatch(VehiAction.remove(obj.key));
    const res = await fetch(
      `https://vehicle-in-default-rtdb.asia-southeast1.firebasedatabase.app/vehicleList/${obj.key}.json`,
      {
        method: "DELETE",
      }
    );
    if(res.ok){
      console.log("success");
    }
  };

  const linkHandler = () => {
    history.replace(`/VehicleList/${obj.key}`);
  };

  return (
    <div className={classes.card}>
      <Card>
        <CardContent onClick={linkHandler} >
          <Typography gutterBottom variant="h4" component="div">
            {obj.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={deleteHandler} variant="contained" color="error">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default List;

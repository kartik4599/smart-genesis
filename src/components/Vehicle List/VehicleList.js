import { useSelector } from "react-redux";
import List from "./List";

const VehicleList = () => {
  const listArr = useSelector((state) => state.vehi.arr);

  return (
    <div style={{ padding: "30px 0px" }}>
      {listArr.length === 0 && <p>No Vehicle Is Added</p>}

      {listArr.map((e) => (
        <List key={e.key} obj={e} />
      ))}
    </div>
  );
};

export default VehicleList;

import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { VehiAction } from "./context/Vehicle-Redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getArr = async () => {
      try {
        const res = await fetch(
          "https://vehicle-in-default-rtdb.asia-southeast1.firebasedatabase.app/vehicleList.json"
        );
        if (res.ok) {
          const data = await res.json();
          const newArr = [];
          for (let key in data) {
            newArr.push({ key, ...data[key] });
          }
          dispatch(VehiAction.add(newArr));
        } else {
          const data = await res.json();
          window.alert(data.error);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getArr();
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;

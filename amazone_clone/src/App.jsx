import "./App.css";

import { useContext, useEffect } from "react";

import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import Routing from "./Routing.jsx";
import { Type } from "./Components/utility/action.types.jsx";
import { auth } from "./Components/utility/firebase.jsx";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // console.log(authUser)
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;

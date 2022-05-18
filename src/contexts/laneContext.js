import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { AuthContext } from "./authContext";
import axios from "axios";

const LaneContext = createContext("none");

function LaneContextComponent(props) {
  const [currentLane, setCurrentLane] = useState("");

  // Retrieve first lane of active user ==================================

  const { loggedInUser } = useContext(AuthContext);

  const getFirstLaneOfLoggedUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/users/children/${loggedInUser.user._id}`
      );
      console.log("😬 Fetch");
      setCurrentLane(response.data.children[0]);
    } catch (err) {
      console.log(err);
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (loggedInUser.user._id && !currentLane) {
      getFirstLaneOfLoggedUser();
    }
  }, [currentLane, loggedInUser, getFirstLaneOfLoggedUser]);

  useEffect(() => console.log("✊", currentLane), [currentLane]);

  // JSX ==================================================================
  return (
    <LaneContext.Provider value={{ currentLane, setCurrentLane }}>
      {props.children}
    </LaneContext.Provider>
  );
}

export { LaneContext, LaneContextComponent };

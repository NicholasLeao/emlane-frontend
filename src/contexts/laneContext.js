import { createContext, useState } from "react";

const LaneContext = createContext("none");

function LaneContextComponent(props) {
  //  Current lane STORED AS WHOLE OBJECT =================================
  const [currentLane, setCurrentLane] = useState("no-lane");

  // JSX ==================================================================
  return (
    <LaneContext.Provider value={{ currentLane, setCurrentLane }}>
      {props.children}
    </LaneContext.Provider>
  );
}

export { LaneContext, LaneContextComponent };

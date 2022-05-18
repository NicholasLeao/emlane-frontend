import Workspace from "./pages/workspace/Workspace";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/home/Home";
import AuthRoute from "./components/AuthRoute";
import { ModalContext } from "./contexts/modalContext";
import { useContext } from "react";
import LaneScreen from "./pages/lanes/LaneScreen";

function App() {
  const { modalState } = useContext(ModalContext);

  return (
    <div className="app">
      {modalState === "login" && <Login />}
      {modalState === "signup" && <Signup />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/workspace/:id"
          element={<AuthRoute component={Workspace} />}
        />
        <Route path="/lanes" element={<AuthRoute component={LaneScreen} />} />
        <Route path="/profile" element={<AuthRoute component={<></>} />} />
      </Routes>
    </div>
  );
}

export default App;

import Workspace from "./pages/workspace/Workspace";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/lanes" element={<></>} />
        <Route path="/profile" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;

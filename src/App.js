import Workspace from "./pages/workspace/Workspace";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AuthRoute from "./components/AuthRoute";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/workspace"
          element={<AuthRoute component={Workspace} />}
        />
        <Route path="/lanes" element={<AuthRoute component={<></>} />} />
        <Route path="/profile" element={<AuthRoute component={<></>} />} />
      </Routes>
    </div>
  );
}

export default App;

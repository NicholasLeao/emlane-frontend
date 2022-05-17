import Workspace from "./pages/workspace/Workspace";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="app">
      <Canvas>
        <Signup />
      </Canvas>
    </div>
  );
}

export default App;

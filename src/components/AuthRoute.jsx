import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

function AuthRoute({ component: Component }) {
  const { loggedInUser } = useContext(AuthContext);
  return loggedInUser ? <Component /> : <Navigate to="/" />;
}

export default AuthRoute;

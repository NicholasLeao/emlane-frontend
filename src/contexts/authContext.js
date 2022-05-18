import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ token: "", user: {} });

  useEffect(() => {
    const storedUser = localStorage.getItem("emlane-user");
    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.token) {
      console.log("isAuth")
      setLoggedInUser(parsedStoredUser);
    } else {
      console.log("isNotAuth")
      setLoggedInUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };

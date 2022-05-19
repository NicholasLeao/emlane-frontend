import { createContext, useState, useEffect } from "react";

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {
  
  const [loggedInUser, setLoggedInUser] = useState({
    token: "",
    user: {},
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("emlane-user");
    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser) {
      setLoggedInUser(parsedStoredUser);
    } else {
      setLoggedInUser({
        token: "",
        user: {},
      });
    }
  }, []);

  useEffect(() => console.log("👽", loggedInUser), [loggedInUser]);

  // useEffect(() => console.log("😁", loggedInUser), [loggedInUser]);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };

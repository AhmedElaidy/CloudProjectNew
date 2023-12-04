import AuthContext from "./AuthContext";
import React, { useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    userRole: "regular",
    token: "",
  });

  const authContext = {
    user,
    login: (id, name, token, userRole) => {
      setUser({ id, name, token, userRole });
    },
    logout: () => {
      setUser({
        id: "",
        name: "",
        userRole: "",
        token: "",
      });
    },
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

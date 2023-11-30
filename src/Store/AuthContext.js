import { createContext } from "react";

const AuthContext = createContext({
  user: {
    id: "",
    name: "",
    userRole: "",
    token: "",
  },
  login: (id, name, token, userRole) => {},
  logout: () => {},
});

export default AuthContext;

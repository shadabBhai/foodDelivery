import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "User",
  cart: [],
});

export default UserContext;

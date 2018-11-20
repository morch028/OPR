import React from "react";

const UserContext = React.createContext({
  authenticated: false,
  user: {roles: ["visitor"]},
  token: null,
  authenticate: (user, token) => {},
  unAuthenticate: () => {}
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
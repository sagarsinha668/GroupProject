import { createContext, useState } from "react";

// Step 1: Create Context
export const Authing = createContext();

// Step 2: Create Provider Component
const AuthingContext = ({ children }) => {
  // Step 3: Initialize auth state
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    token: null,
    email: null,
  });

  // Step 4: Provide context value to the rest of the app
  return (
    <Authing.Provider value={{ auth, setAuth }}>
      {children}
    </Authing.Provider>
  );
};

// Step 5: Export
export default AuthingContext;

import { createContext, useState } from "react";

export const LoginContext = createContext({
  UserData: null,
  login: (data) => {},
});

export function LoginProvider({ children }) {
  const [UserData, setUserData] = useState(null);

  function login(data) {
    setUserData(data);
  }


  return (
    <LoginContext.Provider
      value={{
        UserData,
        login,

      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
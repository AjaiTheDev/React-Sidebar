/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import {
  extractUserInfo,
  getToken,
  isTokenValid,
} from "../utils/local-storage-service";

type AppContextProps = {
  role: string | null;
  hasValidToken: boolean;
};

const AppContext = createContext<AppContextProps | null>(null);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const token = getToken();
  const [role, setRole] = useState<string | null>(null);
  const [hasValidToken, setHasValidToken] = useState<boolean>(false);

  useEffect(() => {
    if (token && isTokenValid(token)) {
      const userInfo = extractUserInfo(token);
      setHasValidToken(true);
      if(userInfo?.userRole) {
        setRole(userInfo?.userRole);
      }
      return;
    }
  }, []);

  return (
    <AppContext.Provider value={{ role, hasValidToken }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useContext must be used within a RoleProvider");
  }
  return context;
};

export { useAppContext, AppContextProvider };

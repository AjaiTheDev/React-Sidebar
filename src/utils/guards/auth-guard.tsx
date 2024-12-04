// AuthGuard.tsx
import React, { useMemo } from "react";
import { Roles } from "../../constant";
import { clearToken, extractUserInfo, getToken, isTokenValid } from "../local-storage-service";
import { Navigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";

interface AuthGuardProps {
  children: React.ReactNode;
  roles: Roles[];
}

const AuthGuard: React.FC<AuthGuardProps> =  ({ children, roles }) => {
  const token = getToken();

  if(!token || !isTokenValid(token)) {
    clearToken();
    return <Navigate to={PathConstants.LOGIN} replace />;
  }

  const userInfo = useMemo(() => {
    return extractUserInfo(token);
  },[token]);


  if(roles?.length > 0 && !roles.includes(userInfo?.userRole as Roles)) {
    return <>You are not authorized to access this page</>
  }

  return <>{children}</>
};

export default AuthGuard;

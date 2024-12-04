import { jwtDecode, JwtPayload } from "jwt-decode";

export interface IJwtCustomPayload extends JwtPayload, IUserInfo {}

export interface IUserInfo {
  userId: string;
  userRole: string;
}

export const getToken = (): string | null => {
  return localStorage?.getItem("access-token");
};

export const setToken = (token: string): void => {
  localStorage?.setItem("access-token", token);
};

export const clearToken = (): void => {
  localStorage.clear();
};

export const isTokenValid = (token: string | null): boolean | null => {
  if (!token) return false;
  const decodedTkn = jwtDecode(token);
  const currentTime = Math.floor(Date.now() / 1000);

  if (!decodedTkn?.exp) return false;

  return decodedTkn.exp > currentTime;
};

export const extractUserInfo = (token: string): IUserInfo | null => {
  const decodeTkn: IJwtCustomPayload = jwtDecode(token);

  if (!decodeTkn.userId || !decodeTkn.userRole) return null;

  return {
    userId: decodeTkn.userId,
    userRole: decodeTkn.userRole,
  };
};

import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authServices";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const authService = authServiceFactory(auth.accessToken);
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const onRegisterSubmit = async (values) => {
    const { rePass, ...data } = values;
    if (rePass !== data.password) {
      throw new Error("Passwords dont match");
    }

    try {
      const result = await authService.register(data);
      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    username: auth.username,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <>
      <AuthContext.Provider value={contextValues}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { authServiceFactory } from "../services/authServices";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useLocalStorage("auth", {});
  const authService = authServiceFactory();
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    const { email, password } = data;
    if (email === "" || password === "") {
      const msg = "All fields are required!";
      navigate("/server-error", { state: { msg } });
      return;
    }

    try {
      const result = await authService.login(data);
      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      navigate("/server-error", { state: { error } });
      return;
    }
  };

  const onRegisterSubmit = async (values) => {
    const { rePass, ...data } = values;

    if (data.email === "" || data.password === "" || rePass === "") {
      const msg = "All fields are required!";
      navigate("/server-error", { state: { msg } });
      return;
    }
    if (rePass !== data.password) {
      const msg = "Passwords dont match";
      navigate("/server-error", { state: { msg } });
      return;
    }

    try {
      const result = await authService.register(data);
      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      navigate("/server-error", { state: { error } });
      return;
    }
  };

  const onLogout = async () => {
    authService.logout();
    setAuth({});
    localStorage.clear();
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
    auth,
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

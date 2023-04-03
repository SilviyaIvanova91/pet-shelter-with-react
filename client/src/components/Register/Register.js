import style from "./Register.Module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      rePass: "",
    },
    onRegisterSubmit
  );
  return (
    <form id="register" onSubmit={onSubmit}>
      <div className="register-body">
        <link
          href="https://fonts.googleapis.com/css?family=Ubuntu:500"
          rel="stylesheet"
          type="text/css"
        />
        <div className="register">
          <div className="register-header">
            <h1>Register</h1>
          </div>
          <div className="register-form">
            <h3>Email:</h3>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={changeHandler}
            />
            <br />
            <h3>Password:</h3>
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="password"
              value={values.password}
              onChange={changeHandler}
            />
            <br /> <h3>Repeat Password:</h3>
            <input
              type="password"
              placeholder="Repeat Password"
              name="rePass"
              autoComplete="rePass"
              value={values.rePass}
              onChange={changeHandler}
            />
            <br />
            <input
              type="submit"
              defaultValue="Register"
              className="register-button"
            />
            <br />
            <p className="sign-in-p">
              Don't have an account ?{" "}
              <Link to="/login" className="sign-in">
                Sign In!
              </Link>
            </p>
            <br />
          </div>
        </div>
      </div>
    </form>
  );
};

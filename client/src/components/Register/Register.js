import style from "./Register.Module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useErrorContext } from "../../context/ErroroContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { errors, minLength, isFormValid, validateEmail } = useErrorContext();

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
              onBlur={(e) => validateEmail(e, values.email)}
            />
            {errors.email && (
              <p className="register-error">Enter a valid Email!</p>
            )}
            <br />
            <h3>Password:</h3>
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="password"
              value={values.password}
              onChange={changeHandler}
              onBlur={(e) => minLength(e, 3, values.password)}
            />
            {errors.password && (
              <p className="register-error">
                Password should be at least 3 characters long!
              </p>
            )}
            <br />
            <h3>Repeat Password:</h3>
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
              disabled={!isFormValid}
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

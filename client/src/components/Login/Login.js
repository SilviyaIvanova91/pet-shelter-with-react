import styles from "./Login.Module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useErrorContext } from "../../context/ErroroContext";

export const Login = () => {
  const { onLoginSubmit } = useAuthContext();
  const { errors, minLength, isFormValid, validateEmail } = useErrorContext();

  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );
  return (
    <section id="login-page" className="auth">
      <form id="login" method="POST" onSubmit={onSubmit}>
        <div className="login-body">
          <link
            href="https://fonts.googleapis.com/css?family=Ubuntu:500"
            rel="stylesheet"
            type="text/css"
          />
          <div className="login">
            <div className="login-header">
              <h1>Login</h1>
            </div>
            <div className="login-form">
              <h3>Email:</h3>
              <input
                type="email"
                id="email"
                placeholder="email"
                name="email"
                value={values.email}
                onChange={changeHandler}
                onBlur={(e) => validateEmail(e, values.email)}
              />
              {errors.email && (
                <p className="login-error">Enter a valid Email!</p>
              )}
              <br />
              <h3>Password:</h3>
              <input
                type="password"
                id="login-password"
                placeholder="Password"
                name="password"
                autoComplete="password"
                value={values.password}
                onChange={changeHandler}
                onBlur={(e) => minLength(e, 3, values.password)}
              />
              {errors.password && (
                <p className="login-error">
                  Password should be at least 3 characters long!
                </p>
              )}
              <br />
              <input
                type="submit"
                defaultValue="Login"
                className="login-button"
                disabled={!isFormValid}
              />
              <br />
              <p className="sign-up-p">
                Don't have an account ?{" "}
                <Link to="/register" className="sign-up">
                  Sign Up!
                </Link>
              </p>
              <br />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

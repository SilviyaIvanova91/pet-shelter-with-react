import pic from "../../images/heart-dog-paw.jpg";
import { Link } from "react-router-dom";
import { AuthContext, AuthProvider } from "../../context/AuthContext";
import { useContext } from "react";

export const Navigation = () => {
  const { userId, onLogout } = useContext(AuthContext);

  return (
    <nav id="header">
      <Link to="/" id="logo">
        <img src={pic} width="85" height="72" alt="" />
      </Link>

      <ul className="navigation">
        {userId ? (
          <li>
            <Link to={`/my-profile/${userId}`}>My Profile</Link>
          </li>
        ) : (
          ""
        )}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Our Pets</Link>
        </li>

        {userId ? (
          <>
            <li>
              <Link to="/create">+ Add Pet</Link>
            </li>
            <li>
              <Link to="/" onClick={onLogout}>
                Logout
              </Link>
            </li>{" "}
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

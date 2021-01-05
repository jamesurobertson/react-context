import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";
import login from "../utils/login";

const Navbar = () => {
  const { user, setUser } = useUser();

  let authLinks;

  if (user) {
    authLinks = (
      <>
        <li>
          <NavLink exact to={`/profile/${user.id}`}>
            Profile
          </NavLink>
        </li>
        <li>
          <button onClick={() => setUser(null)}>Log out</button>
        </li>
      </>
    );
  } else {
    authLinks = (
      <li>
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      </li>
    );
  }
  return (
    <nav>
      <ul className="navlist">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        {authLinks}
      </ul>
    </nav>
  );
};

export default Navbar;

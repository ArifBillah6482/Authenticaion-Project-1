import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={s.Navbar}>
      <NavLink to="/" className={s.NavLink}>
        Home
      </NavLink>

      <NavLink to="/register" className={s.NavLink}>
        Register
      </NavLink>

      <NavLink to="/login" className={s.NavLink}>
        Login
      </NavLink>

      <NavLink to="/profile" className={s.NavLink}>
        Profile
      </NavLink>
    </div>
  );
}
/// /// /// /// ///
export default Navbar;

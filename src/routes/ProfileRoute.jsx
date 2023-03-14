import Profile from "../components/Profile/Profile";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProfileRoute() {
  const [login, set_login] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    set_login(false);
    if (!state) {
      const user = JSON.parse(window.localStorage.getItem("user"));
      if (!user || !user._id || !user.username) {
        navigate("/login");
      } else {
        set_login(true);
      }
    } else {
      window.localStorage.setItem("user", JSON.stringify(state));
      set_login(true);
    }
  }, [navigate, state]);

  return <div>{login && <Profile />}</div>;
}
/// /// /// /// ///
export default ProfileRoute;

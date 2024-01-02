import React, { useEffect } from "react";
import styles from "./MobileNav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { MusicContext } from "../../Context/Context";
import { useContext } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";

const MobileNav = () => {
  const { HandleLogin, LoggedIn, SetLoggedIn } = useContext(MusicContext);
  const Navigate = useNavigate();

  const HandleClick = async () => {
    localStorage.removeItem("token");
    const res = await HandleLogin();
    if (LoggedIn) {
      Navigate("/");
    }
  };

  return (
    <div className={styles.navBar}>
      <div>
        <NavLink to="/">
          <GrHomeRounded className={styles.navIcon} />
        </NavLink>
      </div>
      <div>
        <NavLink to={LoggedIn ? "/usercart" : "/login"}>
          <MdOutlineAddShoppingCart className={styles.navIcon} />
        </NavLink>
      </div>

      <div>
        <NavLink to="/login" onClick={HandleClick}>
          <IoPersonOutline className={styles.navIcon} />
          <div style={{ fontSize: "12px" }}>
            {LoggedIn ? "Logout" : "Login"}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;

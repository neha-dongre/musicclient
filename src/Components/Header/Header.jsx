import React, { useEffect } from "react";

import styles from "./Header.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { MusicContext } from "../../Context/Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Header = () => {
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
    <div>
      <div className={styles.header}>
        <div className={styles.phoneNumber}>
          <h5>
            <FiPhoneCall className={styles.callIcon} /> 912121131313
          </h5>
        </div>
        <div className={styles.shopNow}>
          <p>Get 50% off on selected items</p>
          <p>Shop Now</p>
        </div>
        <div className={styles.register}>
          {LoggedIn ? (
            <button onClick={HandleClick} type="">
              Logout
            </button>
          ) : (
            <div>
              <NavLink className={styles.login} to="/login">
                <button type="">Login</button>
              </NavLink>
              <NavLink className={styles.login} to="/signup">
                <button className={styles.signup} type="">
                  Signup
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className={styles.mobHeader}>
        <NavLink to="/">
          <img src="/images/moblogo.png" alt="Brand Logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

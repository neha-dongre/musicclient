import React from "react";
import styles from "./AboutPage.module.css";
import { NavLink, useLocation } from "react-router-dom";
import ViewCartBtn from "../ViewCartBtn/ViewCartBtn";
import { MusicContext } from "../../Context/Context";
import { useContext } from "react";

const AboutPage = () => {
  const { LoggedIn } = useContext(MusicContext);
  const { PageName, SetPageName } = useContext(MusicContext);
  return (
    <div className={styles.aboutPage}>
      <div className={styles.pageName}>
        <NavLink>
          <img src="/images/logo.png" alt="Logo" />{" "}
        </NavLink>
        <h5>
          <NavLink style={{ color: "black" }} to="/">
            Home
          </NavLink>
          {PageName}
        </h5>
      </div>
      <NavLink to="/usercart"> {LoggedIn ? <ViewCartBtn /> : null}</NavLink>
    </div>
  );
};

export default AboutPage;

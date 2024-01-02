import React from "react";
import Signup from "../../Components/Signup/Signup";
import LogoContainer from "../../Utils/LogoContainer/LogoContainer";
import styles from "./SignupPage.module.css";
import { NavLink } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className={styles.loginPage}>
      <LogoContainer />
      <Signup />
      <div className={styles.haveanAccount}>
        <NavLink to="/login">
          <h5>
            Already have an account? <u>Sign in</u>
          </h5>
        </NavLink>
      </div>
    </div>
  );
};

export default SignupPage;

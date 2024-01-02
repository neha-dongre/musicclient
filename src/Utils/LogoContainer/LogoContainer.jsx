import React from "react";
import styles from "./LogoContainer.module.css";

const LogoContainer = () => {
  return (
    <div className={styles.logocontainer}>
      <img className={styles.brandlogo} src="/images/logo.png" alt="Logo" />
    </div>
  );
};

export default LogoContainer;

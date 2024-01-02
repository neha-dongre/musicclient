import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./BackButton.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { MusicContext } from "../../Context/Context";
import { useContext } from "react";

const BackButton = () => {
  const location = useLocation();
  const { PageName, SetPageName } = useContext(MusicContext);
  const handleGoBack = () => {
    SetPageName("");
    window.history.back();
  };

  return (
    <div>
      <button className={styles.backButton} onClick={handleGoBack}>
        Go Back
      </button>
      <button className={styles.backArrow} onClick={handleGoBack}>
        <FaArrowLeft className={styles.backIcon} />
      </button>
    </div>
  );
};

export default BackButton;

import React from "react";
import styles from "./CheckOut.module.css";
import CheckOutDetails from "../../Components/CheckOutDetail/CheckOutDetails";
import BackButton from "../../Utils/BackButton/BackButton";
import AboutPage from "../../Utils/AboutPageContainer/AboutPage";

const CheckOut = () => {
  return (
    <div>
      <AboutPage />
      <BackButton />
      <div className={styles.pageheading}>
        <h3>
          <u>Checkout</u>
        </h3>
      </div>

      <CheckOutDetails />
    </div>
  );
};

export default CheckOut;

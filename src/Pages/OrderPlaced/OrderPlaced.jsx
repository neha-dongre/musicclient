import React from "react";
import styles from "./OrderPlaced.module.css";
import { NavLink } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div>
      <div className={styles.brandLogo}>
        <NavLink to="/">
          <img src="/images/logo.png" alt="Brand Logo" />
        </NavLink>
      </div>
      <div className={styles.confetiCardContainer}>
        <div className={styles.confetiCard}>
          <div className={styles.confetiImg}>
            <img src="/images/confetti.png" alt="Brand Logo" />
          </div>

          <h3 className={styles.successfulMsg}>
            Order is placed successfully!
          </h3>
          <h4 className={styles.confEmail}>
            You will be receiving a confirmation email with order details
          </h4>
          <div className={styles.goHome}>
            <NavLink to="/">
              <button className={styles.homeButton}>
                Go back to Home page
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;

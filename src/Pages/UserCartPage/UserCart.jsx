import React from "react";
import styles from "./UserCart.module.css";
import AboutPage from "../../Utils/AboutPageContainer/AboutPage";
import { PiBagLight } from "react-icons/pi";
import CartDetail from "../../Components/CartDetail/CartDetail";
import BackButton from "../../Utils/BackButton/BackButton";

const UserCart = () => {
  return (
    <div className={styles.container}>
      <AboutPage />
      <BackButton />
      <div className={styles.pageHeading}>
        <h4>
          <PiBagLight className={styles.bagIcon} /> My Cart
        </h4>
      </div>
      <CartDetail />
    </div>
  );
};

export default UserCart;

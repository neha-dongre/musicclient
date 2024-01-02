import React from "react";
import styles from "./ViewCartBtn.module.css";
import { IoCartOutline, IoGridSharp } from "react-icons/io5";

const ViewCartBtn = () => {
  return (
    <div className={styles.addtoCart}>
      <button type="">
        <IoCartOutline className={styles.cartIcon} />
        View Cart
      </button>
    </div>
  );
};

export default ViewCartBtn;

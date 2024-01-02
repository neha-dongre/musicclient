import React from "react";
import styles from "./OrderBtn.module.css";

const OrderBtn = ({ name }) => {
  return (
    <button className={`${styles.orderbutton}`} type="">
      {name}
    </button>
  );
};

export default OrderBtn;

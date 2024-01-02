import React from "react";
import styles from "./ProductImg.module.css";

const ProductImg = ({ img }) => {
  return (
    <div className={styles.cartImg}>
      <img src={img} alt="" />
    </div>
  );
};

export default ProductImg;

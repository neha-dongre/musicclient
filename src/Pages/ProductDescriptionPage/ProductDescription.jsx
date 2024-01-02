import React from "react";
import styles from "./ProductDescription.module.css";
import { Outlet } from "react-router-dom";
import AboutPage from "../../Utils/AboutPageContainer/AboutPage";
import BackButton from "../../Utils/BackButton/BackButton";

const ProductDescription = () => {
  return (
    <div className={styles.page}>
      <AboutPage />
      <BackButton />
      <Outlet />
    </div>
  );
};

export default ProductDescription;

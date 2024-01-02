import React from "react";
import styles from "./ErrorMsg.module.css";

const ErrorMsg = (props) => {
  return <div className={styles.error}>{props.children}</div>;
};

export default ErrorMsg;

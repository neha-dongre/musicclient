import React, { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Signup.module.css";
import ErrorMsg from "../../Utils/ErrorMsg/ErrorMsg";
import { Register } from "../../Api/UserApi/UserApi";
import { useNavigate } from "react-router-dom";
import { MusicContext } from "../../Context/Context";

const Signup = () => {
  const [message, setmessage] = useState("");
  const Navigate = useNavigate();
  const { LoggedIn, SetLoggedIn } = useContext(MusicContext);
  const InitialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email().required("Email is Required"),
    mobile: Yup.string().required("Mobile Number Required"),
    password: Yup.string().required("Password is Required"),
  });

  const OnSubmit = async (values) => {
    const response = await Register(values);
    if (response == "success") {
      SetLoggedIn(true);
      Navigate("/");
    } else {
      setmessage(response);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.signinContainer}>
        <h3 className={styles.signin}>Create Account</h3>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={OnSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="name">
                Your name
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="name"
                id="name"
              />
              <ErrorMessage component={ErrorMsg} name="name" />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="mobile">
                Mobile number
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="mobile"
                id="mobile"
              />
              <ErrorMessage component={ErrorMsg} name="mobile" />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="email">
                Email Id
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="email"
                id="email"
              />
              <ErrorMessage component={ErrorMsg} name="email" />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="password">
                Password
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="password"
                id="password"
              />
              <ErrorMessage component={ErrorMsg} name="password" />
            </div>

            <div className={styles.privacyPolicy}>
              <p>
                By enrolling your mobile phone number, you consent to receive
                automated security notifications via text message from Musicart.
                Message and data rates may apply.
              </p>
            </div>

            <div>
              <button
                className={styles.continueBtn}
                variant="text"
                type="submit"
              >
                Continue
              </button>
            </div>

            <h3 className={styles.userExists}> {message}</h3>

            <p className={styles.continueMessage}>
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;

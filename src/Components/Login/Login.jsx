import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import styles from "./Login.module.css";
import ErrorMsg from "../../Utils/ErrorMsg/ErrorMsg";
import { LoginUser } from "../../Api/UserApi/UserApi";
import { MusicContext } from "../../Context/Context";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const { HandleLogin, LoggedIn, UserCart, SetUserCart } =
    useContext(MusicContext);
  const [message, setmessage] = useState("");

  const InitialValues = {
    email: "",
    password: "",
  };

  const ValidationSchema = Yup.object({
    email: Yup.string()
      .email()
      .required("Email Id or Phone Number is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const OnSubmit = async (values) => {
    const response = await LoginUser(values);

    if (response.data.message === "user success") {
      HandleLogin(true);

      navigate("/");
    } else {
      setmessage(response.data.message);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.signinContainer}>
        <h3 className={styles.signin}>Sign in</h3>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={OnSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="email">
                Enter your email or mobile number
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

            <div className={styles.privacyPolicy}>
              <p>
                By continuing, you agree to Musicart privacy notice and
                conditions of use.
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;

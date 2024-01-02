import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import styles from "./App.module.css";
import SignupPage from "./Pages/SignupPage/SignupPage";
import HomePage from "./Pages/HomePage/HomePage";
import ProductDescription from "./Pages/ProductDescriptionPage/ProductDescription";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import UserCart from "./Pages/UserCartPage/UserCart";
import CheckOut from "./Pages/CheckOutPage/CheckOut";
import MobileNav from "./Components/MobileNav/MobileNav";
import OrderPlaced from "./Pages/OrderPlaced/OrderPlaced";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/productdetails" element={<ProductDescription />}>
          <Route
            path="/productdetails/:ProductId"
            element={<ProductDetails />}
          />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/usercart" element={<UserCart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
      </Routes>
      <MobileNav />
      <Footer />
    </div>
  );
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import styles from "./CheckOutDetails.module.css";
import OrderBtn from "../../Utils/OrderPLaceBtn/OrderBtn";
import ProductImg from "../../Utils/CartPrdctImg/ProductImg";
import { MusicContext } from "../../Context/Context";
import { NavLink } from "react-router-dom";

const CheckOutDetails = () => {
  const {
    UserCart,
    SetUserCart,
    CartItems,
    SetCartItems,
    PageName,
    SetPageName,
  } = useContext(MusicContext);
  const [Total, SetTotal] = useState(0);
  let price = 0;

  useEffect(() => {
    SetPageName("/Checkout");
    CartItems.map((item, index) => {
      price = item.price * item.quantity + price;
      SetTotal(price.toFixed(2));
    });
  });

  return (
    <div className={styles.checkOutdetail}>
      <div className={styles.checkoutRows}>
        <div className={styles.sectionHeading}>1. Delivery address</div>
        <div className={styles.userAddress}>
          Akash Patel 104 kk hh nagar, Lucknow Uttar Pradesh 226025
        </div>
        <div>
          <NavLink to="/orderplaced">
            <OrderBtn name="Place your order" />
          </NavLink>

          <div>
            <p>
              By placing your order, you agree to Musicart privacy notice and
              conditions of use.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.checkoutRows}>
        <div className={styles.sectionHeading}>2. Payment method</div>
        <div className={styles.paymentMethod}>Pay on delivery ( Cash/Card)</div>
        <div className={styles.orderSummery}>
          <h3>Order Summery</h3>

          {CartItems.map((item, index) => (
            <h4 key={index}>
              <span>{item.product_name}:</span>
              <span>&#8377;{item.price.toFixed(2)}</span>
            </h4>
          ))}

          <h4>
            <span>Delivery:</span>
            <span>&#8377;45.00</span>
          </h4>
        </div>
      </div>
      <div className={styles.checkoutRows}>
        <div className={styles.sectionHeading}>
          3. Review items and delivery
        </div>
        <div>
          {CartItems.map((item, index) => (
            <div className={styles.productVerification} key={index}>
              <ProductImg img={item.img_url[0]} />
              <div className={styles.delivery}>
                <h3>{item.product_name}</h3>
                <p>Color-{item.color}</p>
                <p>{item.availability}</p>
                <h4>Estimated delivery:Monday-FREE Standard Delivery</h4>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.orderTotal}>
          <span>Order Total:</span> <span>&#8377;{Total}</span>
        </div>
      </div>

      <div className={styles.finalOrder}>
        <div className={styles.columnCenter}>
          <NavLink to="/orderplaced">
            <OrderBtn name="Place your order" />
          </NavLink>
        </div>
        <div className={styles.columnCenter}>
          <h4 className={styles.orderTotalFinal}>
            <span>Order Total :</span> <span>₹{Total}</span>
          </h4>
          <p>
            By placing your order, you agree to Musicart privacy notice and
            conditions of use
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetails;

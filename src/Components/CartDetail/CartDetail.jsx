import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./CartDetail.module.css";
import OrderBtn from "../../Utils/OrderPLaceBtn/OrderBtn";
import ProductImg from "../../Utils/CartPrdctImg/ProductImg";
import { MusicContext } from "../../Context/Context";
import { GetCartItem } from "../../Api/UserApi/UserApi";
import { GetCartList } from "../../Api/UserApi/UserApi";

const CartDetail = () => {
  const {
    PageName,
    SetPageName,
    UserCart,
    SetUserCart,
    CartItems,
    SetCartItems,
    LoggedIn,
  } = useContext(MusicContext);
  const [error, Seterror] = useState("");
  const [Total, SetTotal] = useState(0);

  const Quant = [1, 2, 3, 4, 5, 6, 7, 8];

  const CartList = async (CartItems) => {
    const cartlist = await GetCartList();

    if (cartlist.data.message == "success") {
      SetUserCart({ ...CartItems, ...cartlist.data.UserCart[0] });
    } else {
      Seterror("error");
    }
  };

  const CartData = async () => {
    const response = await GetCartItem(UserCart);
    if (response.data.message == "success") {
      setTimeout(() => {
        SetCartItems(response.data.CartItem);
      }, 1000);
    } else {
      Seterror("error");
    }
  };

  const HandleSelect = (e, id) => {
    const quantity = e.target.value;
    setTimeout(() => {
      SetUserCart({ ...UserCart, [id]: quantity });
    }, 1000);
  };

  useEffect(() => {
    let price = 0;
    CartItems.map((item, index) => {
      price = item.price * item.quantity + price;
      SetTotal(price);
    });
  }, [CartItems]);

  useEffect(() => {
    SetPageName("/View Cart");

    CartList();
  }, [LoggedIn]);

  useEffect(() => {
    CartData();
  }, [UserCart]);

  return (
    <div>
      {!error ? (
        <>
          {CartItems.length != 0 ? (
            <>
              <div>
                <div className={styles.cartDetail}>
                  {CartItems.map((item, index) => (
                    <div style={{ marginTop: "10px" }} key={index}>
                      <div className={styles.productInfoContainer}>
                        <div className={styles.priceDistribution}>
                          <div className={styles.productImg}>
                            <ProductImg img={item.img_url[0]} />
                          </div>
                          <div className={styles.purchaseInfo}>
                            <div className={styles.cartProductname}>
                              <h3 className={styles.productName}>
                                {item.product_name}
                              </h3>
                              <p>Color:{item.color}</p>
                              <br />

                              <p>{item.availability}</p>
                            </div>

                            <div className={styles.productPrice}>
                              <h3>Price</h3>
                              <p>&#8377;{item.price.toFixed(2)}</p>
                            </div>

                            <div className={styles.productQuantity}>
                              <h3>Quantity</h3>
                              <select
                                className={`${styles.quantityOptions}`}
                                onChange={(event) =>
                                  HandleSelect(event, item._id)
                                }
                                defaultValue={item.quantity}
                              >
                                {Quant.map((val, index) => (
                                  <option key={index} value={val}>
                                    {val}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className={styles.productTotal}>
                              <h3>Total</h3>
                              <p>
                                &#8377;{(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>

                            <div className={styles.priceDetail}>
                              <h3>PRICE DETAILS</h3>
                              <p>
                                <span>Total MRP</span>
                                <span className={styles.price}>
                                  &#8377;
                                  {(item.price * item.quantity).toFixed(2)}
                                </span>
                              </p>
                              <p>
                                <span>Discount on MRP</span>{" "}
                                <span>&#8377;0</span>
                              </p>
                              <p>
                                <span>Convenience Fee</span>
                                <span>&#8377;45</span>
                              </p>
                            </div>
                          </div>
                          <div className={styles.purchaseInfoMobile}>
                            <h3>{item.product_name}</h3>
                            <p
                              style={{ fontSize: "18px" }}
                              className={styles.price}
                            >
                              &#8377;{item.price.toFixed(2)}
                            </p>
                            <br />
                            <p>Colour - {item.color}</p>
                            <br />
                            <p>{item.availability}</p>
                            <br />
                            <p>Convenience fee &nbsp;&nbsp;&#8377;45</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className={styles.subtotal}>
                    <div className={styles.totalcontainer}>
                      <h4 style={{ textAlign: "center", marginLeft: "150px" }}>
                        {CartItems.length} Item
                      </h4>
                      <h4 style={{ textAlign: "end" }}>
                        &#8377;{Total.toFixed(2)}
                      </h4>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <h4 style={{ marginLeft: "30px" }}>
                          Total Amount &nbsp;:
                        </h4>
                        <h4 style={{ marginRight: "85px" }}>
                          &#8377;{(Total + 45).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className={styles.subtotalMobile}>
                    <h4>
                      <span>Total:</span>
                      <span style={{ marginLeft: "50px" }}>
                        {(Total + 45).toFixed(2)}
                      </span>
                    </h4>
                  </div>

                  <div className={styles.placeOrder}>
                    <NavLink to="/checkout">
                      <OrderBtn name="PLACE ORDER" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.emptyCart}>
              <NavLink to="/">Add Products to Your Cart</NavLink>
            </div>
          )}
        </>
      ) : (
        <div>{error}</div>
      )}
    </div>
  );
};

export default CartDetail;

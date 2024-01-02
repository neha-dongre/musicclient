import React from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import { SetCartItem } from "../Api/UserApi/UserApi";

export const MusicContext = createContext();

const DataProvider = ({ children }) => {
  const [LoggedIn, SetLoggedIn] = useState(false);
  const [InventoryData, SetInventoryData] = useState([]);
  const [Filters, SetFilters] = useState({});
  const [UserCart, SetUserCart] = useState({});
  const [CartItems, SetCartItems] = useState([]);
  const [PageName, SetPageName] = useState("");

  const HandleLogin = () => {
    if (localStorage.getItem("token")) {
      SetLoggedIn(true);
    } else {
      SetLoggedIn(false);
    }
  };

  useEffect(
    () => {
      if (localStorage.getItem("token")) {
        SetLoggedIn(true);
      } else {
        SetLoggedIn(false);
      }
    },
    [UserCart],
    [CartItems]
  );

  useEffect(() => {
    HandleLogin();
  }, []);

  useEffect(() => {
    SetCartItem(UserCart);
  }, [UserCart]);

  const InitialState = {
    LoggedIn,
    SetLoggedIn,
    HandleLogin,
    InventoryData,
    SetInventoryData,
    Filters,
    SetFilters,
    UserCart,
    SetUserCart,
    CartItems,
    SetCartItems,
    PageName,
    SetPageName,
  };

  return (
    <MusicContext.Provider value={InitialState}>
      {children}
    </MusicContext.Provider>
  );
};

export default DataProvider;

import axios from "axios";

const BaseUrl = import.meta.env.VITE_BASE_URL;

export const Register = async (userData) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BaseUrl}/api/user/register`,
      data: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    localStorage.setItem("token", response.data.token);

    return response.data.message;
  } catch (err) {
    return err;
  }
};

export const LoginUser = async (userData) => {
  try {
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/api/user/login`,
      params: userData,
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status == 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.username);
      localStorage.setItem("id", response.data.userid);
      return response;
    }
  } catch (err) {
    return err;
  }
};

export const SetCartItem = async (CartItems) => {
  try {
    if (localStorage.getItem("token")) {
      const response = await axios({
        method: "put",
        url: `${BaseUrl}/api/user/set-user-cart`,
        params: CartItems,
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
    }
  } catch (err) {
    return err;
  }
};

export const GetCartItem = async (CartItems) => {
  try {
    if (localStorage.getItem("token")) {
      const response = await axios({
        method: "get",
        url: `${BaseUrl}/api/user/get-user-cart`,
        params: CartItems,
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });

      return response;
    }
  } catch (err) {
    return err;
  }
};

export const GetCartList = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${BaseUrl}/api/user/user-cart-list`,

      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    });

    if (response.status == 200) {
      return response;
    }
  } catch (err) {
    return err;
  }
};

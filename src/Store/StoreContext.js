import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import AuthContext from "./AuthContext";

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const user = useContext(AuthContext);
  const [typeFilter, setTypeFilter] = useState("");

  const [cart, setCart] = useState([]);

  const [subTotal, setSubTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [MyDesigns, setMyDesigns] = useState([
    {
      id: 1,
      name: "google logo",
      color: "blue",
      category: "Men",
      subCategory: "Pants",
      price: 30,
      img: ["https://i.ibb.co/48Vy78K/580b57fcd9996e24bc43c51f.png"],
    },
    {
      id: 2,
      name: "microsoft logo",
      color: "blue",
      category: "Men",
      subCategory: "Pants",
      price: 80,
      img: ["https://i.ibb.co/8sc4PkL/microsoft-centered-logo.png"],
    },
    {
      id: 3,
      name: "google logo",
      color: "blue",
      category: "Men",
      subCategory: "Pants",
      price: 100,
      img: ["https://i.ibb.co/ypk8Xgg/chrome-google-logo-social-icon-4.png"],
    },
    {
      id: 4,
      name: "google logo",
      color: "blue",
      category: "Men",
      subCategory: "Pants",
      price: 150,
      img: ["https://i.ibb.co/VgCvZ4R/pngimg-com-apple-logo-PNG19688.png"],
    },
  ]);

  const getCurrentCart = async () => {
    console.log("inside get Current cart");
    await axios
      .get(`http://192.168.1.26:5000/cart/${user.user._id}`)
      .then((response) => {
        console.log("response is ", response.data);
        console.log("response is ", response.data.cart.products);
        setCart(response.data.cart.products);
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  };

  useEffect(() => {
    console.log("user is ", user);
    console.log("user.user._id is ", user.user._id);
    if (user.user._id) {
      getCurrentCart();
    }
  }, [user]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        subTotal,
        setSubTotal,
        MyDesigns,
        setMyDesigns,
        products,
        setProducts,
        typeFilter,
        setTypeFilter,
        getCurrentCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;

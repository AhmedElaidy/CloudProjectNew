import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
  const [subCategory, setSubCategory] = useState("");

  const [valueMin, setValueMin] = useState(5);
  const [valueMax, setValueMax] = useState(150);

  const [color, setColor] = useState("");

  const [cart, setCart] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
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
  const [pendingDesigns, setPendignDesigns] = useState([
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

  useEffect(() => {
    const getProducts = async () => {
      await axios
        .get(`http://192.168.1.215:5000/products`)
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((err) => {
          console.log("err is ", err);
        });
    };
    getProducts();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        subCategory,
        setSubCategory,
        valueMin,
        setValueMin,
        valueMax,
        setValueMax,
        color,
        setColor,
        cart,
        setCart,
        searchQuery,
        setSearchQuery,
        subTotal,
        setSubTotal,
        MyDesigns,
        setMyDesigns,
        products,
        setProducts,
        pendingDesigns,
        setPendignDesigns
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;

import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {

 
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
  const [importedPendingDesigns, setImportedPendingDesigns] = useState([
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
        importedPendingDesigns,
        setImportedPendingDesigns,
        typeFilter,
        setTypeFilter,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;

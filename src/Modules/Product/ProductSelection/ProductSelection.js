import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ProductSelectionColor from "./ProductSelectionColor";
import ButtonBlock from "Components/Buttons/ButtonBlock";
import UseStore from "Store/StoreContext";
import { withRouter } from "react-router-dom";

const Product = (props) => {
  const classes = useStyles();
  const { current } = props;
  const [prod, setProd] = useState(current);
  const { cart, setCart } = UseStore();

  const addToCart = () => {
    console.log("prod is ", prod);
    setCart([prod, ...cart]);
    // localStorage.setItem('cart', cart)
    // console.log(localStorage.getItem('cart'))
  };

  const setColor = (e) => {
    setProd((prevProd) => ({
      ...prevProd,
      color: e.target.name,
    }));
  };

  // console.log(localStorage.getItem('cart'))
  return (
    <div className={classes.selection}>
      <h2 className={classes.title}>{current.name}</h2>
      <ProductSelectionColor color={prod.color} setColor={setColor} />
      <div className="mt-4 ">
        <div className={classes.buttonContainer}>
          <ButtonBlock
            onClick={addToCart}
            fontWeight="400"
            text="Add to Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product);

const useStyles = makeStyles((theme) => ({
  selection: {
    color: "#555",
    textAlign: "center",
  },
  title: {
    color: "#555",
  },
  buttonContainer: {
    width: "300px",
    margin: "auto",
  },
}));

import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ProductSelectionColor from "./ProductSelectionColor";
import ButtonBlock from "Components/Buttons/ButtonBlock";
import UseStore from "Store/StoreContext";
import { withRouter } from "react-router-dom";
import ProductSelectionText from "./ProductSelectionText";
import { useEffect } from "react";
import ProductSelectionGraphics from "./ProductSelectionGraphics";

const Product = (props) => {
  const classes = useStyles();
  const { current } = props;
  const [prod, setProd] = useState({ ...current, text: "", graphics: {} });
  const { cart, setCart } = UseStore();

  const addToCart = () => {
    setCart([prod, ...cart]);
  };

  const setColor = (e) => {
    setProd((prevProd) => ({
      ...prevProd,
      color: e.target.name,
    }));
  };

  const setText = (text) => {
    setProd((prevProd) => ({
      ...prevProd,
      text,
    }));
  };

  const setGraphics = (graphic) => {
    setProd((prevProd) => ({
      ...prevProd,
      graphics: {src: graphic.src, alt:graphic.alt, width:graphic.width,height:graphic.height},
    }));
  };

  return (
    <div className={classes.selection}>
      <h2 className={classes.title}>{current.name}</h2>
      <ProductSelectionColor color={prod.color} setColor={setColor} />
      <ProductSelectionText shirtText={prod.text} setShirtText={setText} />
      <ProductSelectionGraphics
        shirtGraphics={prod.graphics}
        setShirtGraphics={setGraphics}
      />
      <div className="mt-4 ">
        <div className={classes.addToCartButton}>
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
  addToCartButton: {
    width: "100%",
    margin: "auto",
    maxWidth: "300px",
    height: '44px',
    backgroundColor: 'rgb(85 30 30) !important',
    color: 'rgb(255 255 255) !important',
    borderRadius:"5px"
  },
}));

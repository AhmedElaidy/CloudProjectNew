import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ButtonRound from "Components/Buttons/ButtonRound";
import useStore from "Store/StoreContext";
import Url from "Paths";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductInList = (props) => {
  const classes = useStyles();

  const { cart, setCart } = useStore();

  const handleDelete = async () => {};

  return (
    <div className={`${classes.delete} mt-auto`}>
      <ButtonRound
        size="28px"
        icon="/icons/trash.svg"
        background="transparent"
        onClick={handleDelete}
      />
      <div style={{ gap: "5px", display: "grid", placeItems: "center" }}>
        <p className={`${classes.p}`}>+</p>
        <p className={`${classes.p}`}>-</p>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  delete: {
    marginLeft: "-4px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  p: {
    fontWeight: "900",
    fontSize: "xx-large",
    color: "white",
    backgroundColor: "rgb(64, 50, 52) !important",
    textAlign: "center",
    width: "3rem",
    height: "3rem",

    borderRadius: "50%",
  },
}));

export default ProductInList;

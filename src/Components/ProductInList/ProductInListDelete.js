import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import ButtonRound from "Components/Buttons/ButtonRound";
import useStore from "Store/StoreContext";
import Url from "Paths";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductInList = (props) => {
  const classes = useStyles();

  const { cart, setCart } = useStore();

  const handleDelete = async() => {
    const newCart = cart;
    newCart.splice(props.index, 1);
    setCart(newCart);
    await props.handleRefresh();
    
  };

  return (
    <div className={`${classes.delete} mt-auto`}>
      <ButtonRound
        size="28px"
        icon="/icons/trash.svg"
        background="transparent"
        onClick={handleDelete}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  delete: {
    marginLeft: "-4px",
  },
}));

export default ProductInList;

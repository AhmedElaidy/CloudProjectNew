import React from "react";
import { makeStyles } from "@material-ui/styles";
import ProductInListInfo from "./ProductInListInfo";

const ProductInListDetails = ({
  name,
  price,
  color,
  text,
  graphics,
  category,
}) => {
  const classes = useStyles();
  return (
    <>
      <h6 className={classes.title}>{name}</h6>
      <div className="d-flex mt-2">
        <ProductInListInfo type="Color" chosen={color} />
        {text && <ProductInListInfo type="Text" chosen={text} />}
        {graphics && <ProductInListInfo type="Graphics" chosen={graphics.alt} />}
        {category && <ProductInListInfo type="Category" chosen={category} />}
      </div>

      <h5 className="mt-2">{price}$</h5>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "16px",
    color: theme.colors.black,
  },
}));

export default ProductInListDetails;

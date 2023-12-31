import React from "react";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductInListQuantity from "./ProductInListQuantity";
import ProductInListDetails from "./ProductInListDetails";
import ProductInListDelete from "./ProductInListDelete";
import ProductInListProductImage from "./ProductInListProductImage";
import useStore from "Store/StoreContext";

const ProductInList = (props) => {
  const classes = useStyles();

  console.log("props.product is ", props.product);
  return (
    <div
      className={clsx(classes.product, {
        "w-100 h-100 ": true,
      })}
    >
      <Row>
        <Col xs={12} sm={4} lg={3}>
          <ProductInListProductImage img={props.product.productId.img} />
        </Col>
        <Col className="d-flex flex-column" xs={9} sm={6} lg={7}>
          <ProductInListDetails
            product={props.product}
            quantity={props.product.quantity}
          />
          <ProductInListDelete productId={props.productId} />
        </Col>
      </Row>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  product: {
    padding: 16,
    background: "#fff",
    borderRadius: 10,
    ["@media (max-width:1000px)"]: {
      padding: "6px 0",
    },
  },
}));

export default ProductInList;

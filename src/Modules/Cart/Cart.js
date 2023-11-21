import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductInList from "Components/ProductInList";
import CartCheckout from "./CartCheckout";
import UseStore from "Store/StoreContext";

const Cart = () => {
  const { cart } = UseStore();
  console.log("cart is ", cart);
  let subTotal = 0;

  useEffect(() => {
    if (cart.length > 0) {
      cart.map((product) => {
        subTotal += Number(product.price);
      });
    }
  }, [cart]);

  useEffect(() => {
    console.log("subTotal is ", subTotal);
  }, [subTotal]);

  return (
    <Container fluid>
      <Row className="mt-3 ">
        <Col className="mb-3" xs={12}>
          <h2>Shopping Cart</h2>
        </Col>
      </Row>
      <Row className="mt-3 cart">
        <Col className="mb-3" xs={12} md={8}>
          <ul class="list-group">
            {cart.length > 0 ? (
              cart.map((product) => {
                return (
                  <li
                    class="list-group-item p-0 mb-3 border-0 "
                    key={product.price * Math.random()}
                  >
                    <ProductInList product={product} />
                  </li>
                );
              })
            ) : (
              <h2>There No Items In The Cart</h2>
            )}
          </ul>
        </Col>
        <Col className="mb-3" xs={12} md={4}>
          <CartCheckout subTotal={subTotal} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

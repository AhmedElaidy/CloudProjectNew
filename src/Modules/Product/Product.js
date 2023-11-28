import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductViewer from "Components/Carousel/ProductViewer";
import ProductSelection from "./ProductSelection/";
import { useParams } from "react-router-dom";
import Search from "Utils/searchInArray";
import useStore from "Store/StoreContext";

const Product = () => {
  const { id } = useParams();
  const { products } = useStore();

  console.log("id is ", id);
  console.log("parseInt(id) is ", parseInt(id));
  let current = Search(products, id);

  console.log("current is ", current);
  return current ? (
    <Container fluid="md">
      <Row className="mt-4 ">
        <Col xs={12} lg={6}>
          <ProductViewer img={current.img} id={id} />
        </Col>
        <Col xs={12} lg={6}>
          <ProductSelection current={current} title={current.name} id={id} />
        </Col>
      </Row>
    </Container>
  ) : (
    <Container fluid="md"></Container>
  );
};

export default Product;

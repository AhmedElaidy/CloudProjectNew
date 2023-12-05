import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ProductViewer from "Components/Carousel/ProductViewer";
import ProductSelection from "./ProductSelection/";
import { useParams } from "react-router-dom";
import Search from "Utils/searchInArray";
import useStore from "Store/StoreContext";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    let url = `http://192.168.1.26:5000/products/product/${id}`;
    const getProduct = async (url) => {
      await axios
        .get(url)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((err) => {
          console.log("err is ", err);
        });
    };
    getProduct(url);
  }, []);
  return product ? (
    <Container fluid="md">
      <Row className="mt-4 ">
        <Col xs={12} lg={6}>


          <ProductViewer img={product.img} id={id} />


        </Col>
        <Col xs={12} lg={6}>
          <ProductSelection current={product} title={product.name} id={id} />
        </Col>
      </Row>
      <Row className="mt-4 ">
        <Col>
          <h5 style={{ color: "#555" }}>
            Name: <span style={{ color: "black" }}> {product.name}</span>
          </h5>
          <h5 style={{ color: "#555" }}>
            Description :<span style={{ color: "black" }}>{product.desc}</span>
          </h5>
          <h5 style={{ color: "#555" }}>
            Color: <span style={{ color: "black" }}>{product.color}</span>
          </h5>
        </Col>
        <Col>
          <h5 style={{ color: "#555" }}>
            Price: <span style={{ color: "black" }}>{product.price}$</span>
          </h5>
          <h5 style={{ color: "#555" }}>
            Category:<span style={{ color: "black" }}> {product.category}</span>
          </h5>
          <h5 style={{ color: "#555" }}>
            Sub Category:
            <span style={{ color: "black" }}> {product.subCategory}</span>
          </h5>
        </Col>
      </Row>
    </Container>
  ) : (
    <Container fluid="md"></Container>
  );
};

export default Product;

import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CatalogFilter from "./CatalogFilter";
import CatalogList from "./CatalogList";
import { useParams } from "react-router-dom";
import axios from "axios";
import useStore from "Store/StoreContext";

const Catalog = () => {
  const { typeFilter } = useStore();
  const [subCategory, setSubCategory] = useState("");

  const [valueMin, setValueMin] = useState(5);
  const [valueMax, setValueMax] = useState(150);
  const [searchQuery, setSearchQuery] = useState("");
  const [color, setColor] = useState("");
  const [products, setProducts] = useState([]);
  const submitFilter = () => {
    let url = "http://192.168.1.217:5000/products";

    // Check each condition and append query parameters if they are true
    if (typeFilter) {
      if (typeFilter != "all") {
        url += `/filter/${typeFilter}`;
      }
    }

    if (subCategory) {
      url.includes("filter")
        ? (url += `/${subCategory}`)
        : (url += `/filter/${subCategory}`);
    }

    if (color) {
      // If there are already parameters in the URL, use '&' for subsequent parameters
      url.includes("filter")
        ? (url += url.includes("?") ? `&color=${color}` : `?color=${color}`)
        : (url += url.includes("?")
            ? `/filter/&color=${color}`
            : `/filter/?color=${color}`);
    }
    if (searchQuery) {
      // If there are already parameters in the URL, use '&' for subsequent parameters
      url.includes("filter")
        ? (url += url.includes("?")
            ? `&searchQuery=${searchQuery}`
            : `?searchQuery=${searchQuery}`)
        : (url += url.includes("?")
            ? `/filter/&searchQuery=${searchQuery}`
            : `/filter/?searchQuery=${searchQuery}`);
    }

    if (valueMax) {
      url.includes("filter")
        ? (url += url.includes("?")
            ? `&maxPrice=${valueMax}`
            : `?maxPrice=${valueMax}`)
        : (url += url.includes("?")
            ? `/filter/&maxPrice=${valueMax}`
            : `/filter/?maxPrice=${valueMax}`);
    }

    if (valueMin) {
      url.includes("filter")
        ? (url += url.includes("?")
            ? `&minPrice=${valueMin}`
            : `?minPrice=${valueMin}`)
        : (url += url.includes("?")
            ? `/filter/&minPrice=${valueMin}`
            : `/filter/?minPrice=${valueMin}`);
    }
    console.log("new url is ", url);
    getProducts(url);
  };

  const getProducts = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  };

  useEffect(() => {
    console.log("inside useEffect of typeFilter ");
    setColor("");
    setSearchQuery("");
    setValueMax(150);
    setValueMin(5);
    setSubCategory("");
  }, [typeFilter]);

  useEffect(() => {
    console.log("inside useEffect of typeFilter subCategory");
    let url = "http://192.168.1.217:5000/products";
    console.log("typeFilter is ", typeFilter);

    if (typeFilter) {
      if (typeFilter != "all") {
        url += `/filter/${typeFilter}`;
      }
    }

    if (subCategory) {
      url.includes("filter")
        ? (url += `/${subCategory}`)
        : (url += `/filter/${subCategory}`);
    }

    console.log("new url is ", url);
    getProducts(url);
  }, [typeFilter, subCategory]);

  return (
    <Row className="m-0">
      <Col className="mb-3" xs={12} lg={3}>
        <CatalogFilter
          submitFilter={submitFilter}
          subCategory={subCategory}
          setSubCategory={setSubCategory}
          valueMin={valueMin}
          setValueMin={setValueMin}
          valueMax={valueMax}
          setValueMax={setValueMax}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          color={color}
          setColor={setColor}
          typeFilter={typeFilter}
        />
      </Col>
      <Col className="mb-3" xs={12} lg={9}>
        <CatalogList products={products} />
      </Col>
    </Row>
  );
};

export default Catalog;

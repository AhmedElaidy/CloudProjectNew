import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import DesignProduct from "./DesignProduct";
import useStore from "Store/StoreContext";
import ButtonBlock from "Components/Buttons/ButtonBlock";
import { Link } from "react-router-dom";
import Url from "Paths";

const MyDesigns = () => {
  const { MyDesigns } = useStore();
  return (
    <div className="pr-5 pl-5">
      <h3 className="text-center mb-3" style={{ fontWeight: "700" }}>
        My Designs
      </h3>
      <Row className=" d-flex justify-content-center">
        {MyDesigns.map((design, index) => {
          return (
            <Col
              key={index * Math.random()}
              className="mb-4 p-2"
              xs={12}
              sm={6}
              md={4}
              xl={3}
              style={{ borderRadius: "5px" }}
            >
              <DesignProduct
                link={design.id}
                img={design.img}
                name={design.name}
                price={design.price}
              />
            </Col>
          );
        })}
      </Row>
      <Row className="d-flex justify-content-center mt-2 mb-2 w-25">
        <Link to={`${Url.HOME}/my-designs/create`}>
          <ButtonBlock fontWeight="400" text="Create Design" />
        </Link>
      </Row>
    </div>
  );
};

export default MyDesigns;

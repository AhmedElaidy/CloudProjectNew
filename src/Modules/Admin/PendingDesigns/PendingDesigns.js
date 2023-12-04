import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import useStore from "Store/StoreContext";
import PendingDesign from "./PendingDesign";

const PendingDesigns = () => {
  const { pendingDesigns } = useStore();

  const generatePendingProducts = () => {

  }
  return (
    <div className="pr-5 pl-5">
      <h3 className="text-center mb-3" style={{ fontWeight: "700" }}>
        Pending Designs
      </h3>
      <Row className=" d-flex justify-content-center">
        {pendingDesigns.map((design, index) => {
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
              <PendingDesign
                id={design.id}
                link={design.id}
                img={design.img}
                name={design.name}
                price={design.price}
                generatePendingProducts={generatePendingProducts}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PendingDesigns;

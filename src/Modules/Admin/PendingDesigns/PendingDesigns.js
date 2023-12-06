import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import useStore from "Store/StoreContext";
import PendingDesign from "./PendingDesign";
import axios from "axios";
import AuthContext from "Store/AuthContext";

const PendingDesigns = () => {
  const { userRole } = useContext(AuthContext);
  const [pendingDesigns, setPendingDesigns] = useState([]);

  const generatePendingProducts = async () => {
    await axios
      .get(`http://192.168.1.217:5000/products/pending`)
      .then((response) => {
        console.log("response is ", response);
        setPendingDesigns(response.data.products);
      })
      .catch((err) => {
        console.log("err is ", err);
      });
  };
  
  useEffect(() => {
    generatePendingProducts();
  }, []);

  if (userRole?.toLowerCase() !== "admin") {
    return (
      <h3 className="text-center"> You Are Not Authorized To See This Page</h3>
    );
  } else {
    return (
      <div className="pr-5 pl-5">
        <h3 className="text-center mb-3" style={{ fontWeight: "700" }}>
          Pending Designs
        </h3>
        <Row className=" d-flex justify-content-center">
          {pendingDesigns?.map((design, index) => {
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
                  design={design}
                  generatePendingProducts={generatePendingProducts}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
};

export default PendingDesigns;

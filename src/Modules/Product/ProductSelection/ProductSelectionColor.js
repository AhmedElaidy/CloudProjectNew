import React from "react";
import ButtonColor from "Components/Buttons/ButtonColor";
import { Button } from "react-bootstrap";

const ProductSelectionSize = ({ color, setColor }) => {
  console.log("color is ", color);
  return (
    <div className="mt-3">
      <h4>Color</h4>
      <div
        className="d-flex justify-content-center mt-2"
        style={{ marginBottom: "5px" }}
      >
        <ButtonColor name="red" background="red" onClick={setColor} />
        <ButtonColor name="yellow" background="yellow" onClick={setColor} />
        <ButtonColor name="blue" background="blue" onClick={setColor} />
        <ButtonColor name="black" background="black" onClick={setColor} />
        <ButtonColor name="grey" background="grey" onClick={setColor} />
      </div>
      <Button
        style={{
          backgroundColor: color,
          width: "30px",
          height: "30px",
          borderColor: "transparent",
        }}
        className="rounded-circle"
      />
    </div>
  );
};

export default ProductSelectionSize;

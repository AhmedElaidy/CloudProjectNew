import React from 'react';
import ButtonColor from 'Components/Buttons/ButtonColor';
import { Button } from 'react-bootstrap';


const ProductSelectionSize = ({color, setColor }) => {
  console.log('color is ',color)
  return (
    <div className="mt-3">
      <h4 style={{ marginBottom: "5px" }}>Color</h4>
      <Button
        style={{
          backgroundColor: color,
          width: "30px",
          height: "30px",
          borderColor: "transparent",
        }}
        className="rounded-circle"
      />
      <div className="d-flex justify-content-center mt-2">
        <ButtonColor name="red" background="red" onClick={setColor} />
        <ButtonColor name="yellow" background="yellow" onClick={setColor} />
        <ButtonColor name="blue" background="blue" onClick={setColor} />
        <ButtonColor name="black" background="black" onClick={setColor} />
        <ButtonColor name="grey" background="grey" onClick={setColor} />
      </div>
    </div>
  );
};

export default ProductSelectionSize;
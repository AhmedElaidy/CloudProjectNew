import ButtonBlock from "Components/Buttons/ButtonBlock";
import InputField from "Components/InputField";
import Checkbox from "Components/Switches/Checkbox";
import clsx from "clsx";
import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const CreateDesign = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleCreateDesign = (e) => {
    e.preventDefault();
  };

  const [product, setProduct] = useState({
    name: "",
    color: "",
    category: "",
    subCategory: "",
    price: 0,
    imgLink: "",
  });

  const CategoryChoice = () => {
    const categoryOptions = [
      { id: 1, label: "Men", value: "men" },
      { id: 2, label: "Women", value: "women" },
      { id: 3, label: "Kids", value: "kids" },
    ];
    return (
      <Dropdown isOpen={isOpen} toggle={toggle} className="mt-3">
        <DropdownToggle
          style={{
            backgroundColor: "#403234",
            borderColor: "transparent",
          }}
          caret
        >
          {product.category ? product.category : "Category"}
        </DropdownToggle>
        <DropdownMenu>
          {categoryOptions.map((option) => (
            <DropdownItem
              key={option.id}
              onClick={() =>
                setProduct((prevProd) => ({
                  ...prevProd,
                  category: option.value,
                }))
              }
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  };

  const SubCategoryChoice = () => {
    const subCategoryOptions = [
      { id: 1, label: "Pants", value: "pants" },
      { id: 2, label: "Tops&Tees", value: "tops&tees" },
      { id: 3, label: "Jackets&Coats", value: "jackets&coats" },
      { id: 4, label: "Shoes", value: "shoes" },
      { id: 5, label: "Accessories", value: "accessories" },
      { id: 6, label: "Hoodies&Sweatshirts", value: "hoodies&sweatshirts" },
      { id: 7, label: "Shirts", value: "shirts" },
    ];
    return (
      <Dropdown isOpen={isOpen} toggle={toggle} className="mt-3">
        <DropdownToggle
          style={{
            backgroundColor: "#403234",
            borderColor: "transparent",
          }}
          caret
        >
          {product.subCategory ? product.subCategory : "Sub Category"}
        </DropdownToggle>
        <DropdownMenu>
          {subCategoryOptions.map((option) => (
            <DropdownItem
              key={option.id}
              onClick={() =>
                setProduct((prevProd) => ({
                  ...prevProd,
                  subCategory: option.value,
                }))
              }
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  };

  const ColorChoice = () => {
    const subCategoryOptions = [
      { id: 1, label: "Grey", value: "grey" },
      { id: 2, label: "Black", value: "back" },
      { id: 3, label: "Blue", value: "blue" },
      { id: 4, label: "Yellow", value: "yellow" },
      { id: 5, label: "Red", value: "red" },
    ];
    return (
      <Dropdown isOpen={isOpen} toggle={toggle} className="mt-3">
        <DropdownToggle
          style={{
            backgroundColor: "#403234",
            borderColor: "transparent",
          }}
          caret
        >
          {product.color ? product.color : "Color"}
        </DropdownToggle>
        <DropdownMenu>
          {subCategoryOptions.map((option) => (
            <DropdownItem
              key={option.id}
              onClick={() =>
                setProduct((prevProd) => ({
                  ...prevProd,
                  color: option.value,
                }))
              }
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={handleCreateDesign}
        className="w-50"
        style={{ minWidth: "250px" }}
      >
        <InputField placeholder="Name" value="name" />
        <div className="d-flex justify-content-around">
          <ColorChoice />
          <CategoryChoice />
          <SubCategoryChoice />
        </div>
        <InputField placeholder="Price" />
        <InputField placeholder="Img Link" />
        <ButtonBlock
          type="submit"
          text="Request Admin Confirmation"
          style={{ margin: "15px 0" }}
        />
      </form>
    </div>
  );
};

export default CreateDesign;

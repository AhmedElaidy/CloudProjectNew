import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
const ProductSelectionText = ({ shirtText, setShirtText }) => {
  const [inputText, setInputText] = useState(shirtText);
  const [isEditing, setIsEditing] = useState(true);

  const handleOnSumbit = (e) => {
    e.preventDefault();
    if(inputText.trim()){
      setShirtText(inputText);
      setIsEditing(false)
    }
  };

  return (
    <div className="mt-4">
      <h4>Added Text</h4>
      {!isEditing && (
        <div>
          <h3>{shirtText}</h3>
          <button className={styles.btn} onClick={() => setIsEditing(true)}>
            Edit Text
          </button>
        </div>
      )}
      {isEditing && (
        <form onSubmit={handleOnSumbit} className={styles.form}>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            type="text"
            maxLength={23}
          />
          <button type="submit" className={styles.btn}>
            Add Text
          </button>
        </form>
      )}
    </div>
  );
};

export default ProductSelectionText;

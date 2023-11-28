import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
const ProductSelectionGraphics = ({ shirtGraphics, setShirtGraphics }) => {
  const [isEditing, setIsEditing] = useState(true);

  const imgs = [
    {
      src: "https://i.ibb.co/48Vy78K/580b57fcd9996e24bc43c51f.png",
      alt: "google logo",
      width: 100,
      height: 50,
    },
    {
      src: "https://i.ibb.co/8sc4PkL/microsoft-centered-logo.png",
      alt: "microsoft logo",
      width: 100,
      height: 50,
    },
    {
      src: "https://i.ibb.co/ypk8Xgg/chrome-google-logo-social-icon-4.png",
      alt: "google logo",
      width: 100,
      height: 100,
    },
    {
      src: "https://i.ibb.co/VgCvZ4R/pngimg-com-apple-logo-PNG19688.png",
      alt: "apple logo",
      width: 130,
      height: 100,
    },
  ];

  useEffect(() => {
    if (shirtGraphics.src) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [shirtGraphics]);

  return (
    <div className="mt-3">
      <h4>Graphics</h4>
      {isEditing && (
        <div className={styles.imgs_div}>
          {imgs.map((img) => {
            return (
              <div key={img.src} className={styles.img_div}>
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  onClick={(e) => setShirtGraphics(e.target)}
                />
              </div>
            );
          })}
        </div>
      )}
      {!isEditing && (
        <div>
          <div>
            <h4 className="mt-2">Added Graphics</h4>
            <img
              key={shirtGraphics.src}
              src={shirtGraphics.src}
              alt={shirtGraphics.alt}
              width={shirtGraphics.width}
              height={shirtGraphics.height}
              className="mt-3 mb-3"
            />
          </div>
          <div>
            <button className={styles.btn} onClick={() => setShirtGraphics({})}>
              Clear Graphic
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSelectionGraphics;

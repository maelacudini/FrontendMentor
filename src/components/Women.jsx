import image from "../assets/image-product-1.jpg";
import image2 from "../assets/image-product-2.jpg";
import image3 from "../assets/image-product-3.jpg";
import image4 from "../assets/image-product-4.jpg";
import img from "../assets/image-product-1-thumbnail.jpg";
import img2 from "../assets/image-product-2-thumbnail.jpg";
import img3 from "../assets/image-product-3-thumbnail.jpg";
import img4 from "../assets/image-product-4-thumbnail.jpg";
import style from "./css/app.module.css";
import { useState } from "react";
import cart from "../assets/icon-cart.svg";

const Women = () => {
  const [selectedImage, setSelectedImage] = useState(image);

  const handleThumbnailClick = (newImage) => {
    setSelectedImage(newImage);
  };

  return (
    <div>
      <div
        class="modal fade"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div
            class="modal-content"
            style={{ backgroundColor: "transparent", border: "none" }}
          >
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                src={selectedImage}
                alt="img"
                width={"100%"}
                height={"auto"}
              />
              <div className="w-100 d-flex justify-content-between mt-4">
                <img
                  onClick={() => handleThumbnailClick(image)}
                  src={img}
                  alt="img"
                  width={"23%"}
                  height={"23%"}
                />
                <img
                  onClick={() => handleThumbnailClick(image2)}
                  src={img2}
                  alt="img"
                  width={"23%"}
                  height={"23%"}
                />
                <img
                  onClick={() => handleThumbnailClick(image3)}
                  src={img3}
                  alt="img"
                  width={"23%"}
                  height={"23%"}
                />
                <img
                  onClick={() => handleThumbnailClick(image4)}
                  src={img4}
                  alt="img"
                  width={"23%"}
                  height={"23%"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-lg-6">
          <img
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            src={selectedImage}
            alt="img"
            width={"100%"}
            height={"auto"}
          />
          <div className="w-100 d-flex justify-content-between mt-4">
            <img
              onClick={() => handleThumbnailClick(image)}
              src={img}
              alt="img"
              width={"23%"}
              height={"23%"}
            />
            <img
              onClick={() => handleThumbnailClick(image2)}
              src={img2}
              alt="img"
              width={"23%"}
              height={"23%"}
            />
            <img
              onClick={() => handleThumbnailClick(image3)}
              src={img3}
              alt="img"
              width={"23%"}
              height={"23%"}
            />
            <img
              onClick={() => handleThumbnailClick(image4)}
              src={img4}
              alt="img"
              width={"23%"}
              height={"23%"}
            />
          </div>
        </div>
        <div className="col-lg-6 p-5 d-flex justify-content-center align-items-center">
          <div>
            <small>SNEAKER COMPANY</small>
            <h1 className="mt-3 mb-5">Fall Limited Edition Sneakers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              soluta temporibus quo iure reiciendis modi quaerat cum sit autem
              possimus? Molestias maiores tempore officiis, culpa ratione
              tempora cum quidem dignissimos.
            </p>
            <div className="mt-3 d-flex align-items-center">
              <h5 className="me-3 mb-0">$125.00</h5>
              <small className={style.discount}>50%</small>
            </div>
            <p className={style.price} style={{ textAlign: "start" }}>
              $250.00
            </p>

            <div className="mt-3 d-flex align-items-center">
              <div className="input-group" style={{ width: "100px" }}>
                <span className="button input-group-text">+</span>
                <input
                  type="text"
                  className="form-control text-center"
                  aria-label="Amount"
                  placeholder="0"
                />
                <span className="button input-group-text">-</span>
              </div>

              <button className="button btn ms-3">
                <img
                  style={{ borderRadius: "0" }}
                  src={cart}
                  alt="cart"
                  className="me-2 mb-1"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;

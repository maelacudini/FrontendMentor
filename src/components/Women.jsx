import style from "./css/app.module.css";
import { useState } from "react";

const Women = () => {
  const imageUrls = [
    "https://images.unsplash.com/photo-1603808033596-5d1fa1629eae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80",
    "https://images.unsplash.com/photo-1603808033176-9d134e6f2c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80",
    "https://images.unsplash.com/photo-1603808033587-935942847de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
    "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80",
  ];

  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

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
                height={"500px"}
                style={{ objectFit: "cover" }}
              />
              <div className="w-100 d-flex justify-content-between mt-4">
                {imageUrls.map((imageUrl, index) => (
                  <img
                    key={index}
                    onClick={() => handleThumbnailClick(imageUrl)}
                    src={imageUrl}
                    alt={`Thumbnail ${index + 1}`}
                    width={"23%"}
                    height={"200px"}
                    style={{ objectFit: "cover" }}
                  />
                ))}
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
            height={"500px"}
            style={{ objectFit: "cover" }}
          />
          <div className="w-100 d-flex justify-content-between mt-4">
            {imageUrls.map((imageUrl, index) => (
              <img
                key={index}
                onClick={() => handleThumbnailClick(imageUrl)}
                src={imageUrl}
                alt={`Thumbnail ${index + 1}`}
                width={"23%"}
                height={"200px"}
                style={{ objectFit: "cover" }}
              />
            ))}
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
                <i class="bi bi-bag me-2"></i>
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

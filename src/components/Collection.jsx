import { useDispatch } from "react-redux";
import { addItem } from "../actions/cart";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./css/app.module.css";
import cart from "../assets/icon-cart.svg";

const Collection = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const newItem = {
      ...item,
      id: uuidv4(),
      quantity: parseInt(quantity),
    };

    dispatch(addItem(newItem));
    console.log(newItem);
  };

  const generateValidId = (title) => {
    return title
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-zA-Z0-9-]/g, ""); // Remove special characters
  };

  return (
    <div
      className="modal fade"
      id={`modal-${generateValidId(item.title)}`}
      tabIndex="-1"
      aria-labelledby={`modal-${generateValidId(item.title)}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img
              className="mb-3"
              src={item.imageUrl}
              alt="image"
              width={"100%"}
            />
            <small>SNEAKER COMPANY</small>
            <div className="mt-3 d-flex justify-content-between align-items-center">
              <h1>{item.title}</h1>
              <div>
                <span className={style.price}>
                  ${(item.price + 0.25 * item.price).toFixed(2)}
                </span>
                <span className={style.discount}>25%</span>
              </div>
              <h5>$ {item.price}</h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              eligendi doloremque, a, ipsum nostrum facilis nihil soluta illum
              alias distinctio ducimus itaque esse accusamus. Maxime deleniti
              magni cumque commodi inventore?
            </p>
            <div className="d-flex justify-content-between mt-5">
              <div class="input-group w-25">
                <span
                  class="button input-group-text"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </span>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <span
                  class="button input-group-text"
                  onClick={() =>
                    setQuantity(Math.max(1, parseInt(quantity) - 1))
                  }
                >
                  -
                </span>
              </div>

              <button
                className="btn button d-flex align-items-center"
                onClick={addToCart}
              >
                <img src={cart} alt="cart" className="me-2" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;

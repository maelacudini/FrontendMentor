import { useDispatch, useSelector } from "react-redux";
import style from "./css/app.module.css";
import { addItem, deleteItem } from "../actions/cart";

const Cart = () => {
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  const deleteFromCart = (item) => {
    console.log(item.id);
    dispatch(deleteItem(item.id));
    console.log("Item deleted");
  };

  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.price * item.quantity;
    return total + itemPrice;
  }, 0);

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Your cart
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {cartItems.lenght !== 0 ? (
              cartItems.map((item) => (
                <div
                  className="d-flex justify-content-between align-items-baseline"
                  key={item.id}
                >
                  <h5>
                    {item.title}
                    <span className="ms-3">x{item.quantity}</span>
                  </h5>

                  <div className="d-flex align-items-baseline">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      className="btn button ms-3"
                      style={{ borderRadius: "10px 0px 0px 10px" }}
                      onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                    <button
                      className="btn button"
                      style={{ borderRadius: "0px 10px 10px 0px" }}
                      onClick={() => deleteFromCart(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <h5 style={{ color: "hsl(220, 14%, 75%)", textAlign: "center" }}>
                Your cart is empty
              </h5>
            )}

            {cartItems.lenght !== 0 && (
              <div className="d-flex justify-content-between align-items-baseline mt-3">
                <h3>Your total</h3>
                <h5>${totalPrice.toFixed(2)}</h5>
              </div>
            )}
          </div>
          {cartItems.lenght !== 0 && (
            <div className="modal-footer">
              <button
                type="button"
                className="button btn"
                data-bs-dismiss="modal"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

import cart from "../assets/icon-cart-black.svg";
import menu from "../assets/icon-menu.svg";
import avatar from "../assets/image-avatar.png";
import style from "./css/app.module.css";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar navbar-expand-md p-0">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              style={{ borderRadius: 0 }}
              src={menu}
              alt="menu"
              width={"20px"}
              className="me-3 mb-1"
            />
          </button>
          <RouterLink className="navbar-brand me-auto" to="/">
            <h1 className="me-3">sneakers</h1>
          </RouterLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <RouterLink
                  className="nav-link active"
                  aria-current="page"
                  to="/collections"
                >
                  Collections
                </RouterLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Man
                </a>
              </li>
              <li className="nav-item">
                <RouterLink className="nav-link" to="/women">
                  Women
                </RouterLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="footer">
                  About
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink className="nav-link" to="footer">
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div
            className="d-flex align-items-center position-absolute"
            style={{ right: "0", top: "5px" }}
          >
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              className="nav-link ps-0 rightLinks"
            >
              <div className="position-relative">
                <img
                  style={{ borderRadius: 0 }}
                  src={cart}
                  alt="cart"
                  className="me-3"
                />
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                  {cartQuantity}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
            </button>
            <a className="nav-link pe-0 rightLinks" href="#">
              <img
                style={{ borderRadius: 0 }}
                src={avatar}
                alt="avatar"
                width={"40px"}
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

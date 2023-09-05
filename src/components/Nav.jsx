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
    <nav className="navbar navbar-expand-md p-0">
      <div
        className="container-fluid p-0"
        style={{ borderBottom: "1px solid hsla(220, 14%, 75%, 0.388)" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list me-3" style={{ fontSize: "25px" }}></i>
        </button>
        <RouterLink className="navbar-brand me-auto" to="/">
          <h1 className="me-3">sneakers</h1>
        </RouterLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <RouterLink
                className={`nav-link active ${style.link}`}
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
              <i class="bi bi-bag me-3" style={{ fontSize: "25px" }}></i>
              <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">
                {cartQuantity}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>
          </button>
          <a className="nav-link pe-0 rightLinks" href="#">
            <img
              style={{ objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1692180024031-4882297c4734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="avatar"
              width={"40px"}
              height={"40px"}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

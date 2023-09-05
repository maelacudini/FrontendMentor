import style from "./css/app.module.css";
import cart from "../assets/icon-cart.svg";

const Home = () => {
  return (
    <main className={style.hero}>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1608053874591-b12860f15ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80"
            alt="bag"
            height={"100%"}
            width={"100%"}
            style={{
              maxHeight: "500px",
              objectFit: "cover",
              objectPosition: "bottom",
            }}
          />
        </div>
        <div className="col-md-6 d-flex align-items-center p-5">
          <div>
            <small>SOME TITLE HERE IN ORANGE</small>
            <h1>Welcome to sneakers</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ullam
              voluptates ab dicta maiores commodi, voluptas deserunt non at in a
              voluptate! Itaque quos doloremque cumque ex facilis maiores
              voluptatem!
            </p>
            <button className="btn button d-flex align-items-center">
              <img src={cart} alt="cart" className="me-2" />
              Start shopping
            </button>
          </div>
        </div>
      </div>

      <div id="carouselExample" className={`carousel slide ${style.carousel}`}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1613338442882-b4d4643877c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80"
              className="d-block"
              width={"100%"}
              height={"500px"}
              style={{ objectFit: "cover" }}
              alt="shoes"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1585591359088-e144e8a61170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              className="d-block"
              width={"100%"}
              height={"500px"}
              style={{ objectFit: "cover" }}
              alt="shoes"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1608319294852-d87737e8e46c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
              className="d-block"
              width={"100%"}
              height={"500px"}
              style={{ objectFit: "cover" }}
              alt="shoes"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
};

export default Home;

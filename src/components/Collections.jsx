import { addItem } from "../actions/cart";
import style from "./css/app.module.css";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Collection from "./Collection";
import { useState } from "react";

const Collections = () => {
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState({});

  const addToCart = (item) => {
    const newItem = {
      ...item,
      id: uuidv4(),
    };

    dispatch(addItem(newItem));
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [item.title]: "Item added to cart",
    }));

    setTimeout(() => {
      setFeedback({});
    }, 3000);
  };

  const items = [
    {
      title: "Nike Air",
      price: 100.99,
      imageUrl:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
    },
    {
      title: "Adidas Max",
      price: 120.99,
      imageUrl:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    },
    {
      title: "Nike Air Jordan",
      price: 145.99,
      imageUrl:
        "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: "K-Swiss",
      price: 143.99,
      imageUrl:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80",
    },
    {
      title: "Nike Air Black",
      price: 90.99,
      imageUrl:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2030&q=80",
    },
  ];

  const generateValidId = (title) => {
    return title
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-zA-Z0-9-]/g, ""); // Remove special characters
  };

  return (
    <div className={style.gallery}>
      {items.map((item, index) => (
        <div className={style.itemContainer} key={index}>
          {feedback[item.title] && (
            <div className="alert alert-success" role="alert">
              {feedback[item.title]}
            </div>
          )}
          <img
            className={style.galleryItem}
            src={item.imageUrl}
            alt={item.title}
          />
          <h3>{item.title}</h3>
          <p>${item.price.toFixed(2)}</p>
          <button
            type="button"
            className="btn btn-outline me-3"
            data-bs-toggle="modal"
            data-bs-target={`#modal-${generateValidId(item.title)}`}
          >
            Details
          </button>
          <Collection item={item} />
          <button className="btn button" onClick={() => addToCart(item)}>
            <i class="bi bi-bag me-2"></i>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Collections;

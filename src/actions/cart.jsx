import { v4 as uuidv4 } from "uuid";

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: {
      id: uuidv4(),
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    },
  };
};

export const deleteItem = (itemId) => {
  return {
    type: "DELETE_ITEM",
    payload: itemId,
  };
};

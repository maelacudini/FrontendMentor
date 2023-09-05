import { v4 as uuidv4 } from "uuid";

const initialstate = {
  items: [],
};

const cart = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, create a new state array
        // and update the quantity of the existing item
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += 1;

        return {
          ...state,
          items: updatedItems,
        };
      } else {
        // If it's a new item, add it to the cart with quantity 1
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "DELETE_ITEM":
      const itemToDeleteIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemToDeleteIndex === -1) {
        // If the item is not found in the cart, simply return the current state
        return state;
      }

      const updatedItems = [...state.items];
      const deletedItem = updatedItems[itemToDeleteIndex];

      // Decrement the quantity of the item
      if (deletedItem.quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        updatedItems.splice(itemToDeleteIndex, 1);
      } else {
        // If the quantity is greater than 1, decrement the quantity
        deletedItem.quantity -= 1;
      }

      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
};

export default cart;

//The state argument represents the current state of the application, while the action argument represents the action being dispatched to update the state.

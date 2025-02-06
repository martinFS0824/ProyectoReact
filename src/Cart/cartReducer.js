import { TYPES } from "./actionTypes";

export const cartInitialSate = {
  products: [
    { id: 1, nombre: "Pizza Calabresa", precio: 19.99, precioAntiguo:24.99, img:'public/pizza.jpg'},
    { id: 2, nombre: "Pancakes", precio: 35.99, precioAntiguo:44.99, img:'public/pancakes.jpg'},
    { id: 3, nombre: "Avocado Toast", precio: 17.99, precioAntiguo:20.99, img:'public/avocado.jpg'},
    { id: 4, nombre: "Mermelada Casera", precio: 24.99, precioAntiguo:29.99, img:'public/orange.jpg'},
  ],
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      const newCartItem = state.products.find(
        (product) => product.id === action.payload
      );
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...newCartItem, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newCartItem, cantidad: 1 }],
          };
    }
    case TYPES.REMOVE_ITEM: {
      const itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.cantidad > 1
        ? {
            ...state,
            cart:state.cart.map((item) => item.id === action.payload?{...itemToDelete, cantidad: item.cantidad -1}:item)
        }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_ITEMS: {
    }
    case TYPES.CLEAR_CART: {
    }
  }
}

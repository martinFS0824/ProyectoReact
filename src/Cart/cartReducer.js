import { TYPES } from "./actionTypes";

export const cartInitialSate = {
  products: [
    { id: 1, nombre: "Pizza Calabresa", precio: 19.99, precioAntiguo:24.99, img:'public/pizza.jpg'},
    { id: 2, nombre: "Pancakes", precio: 35.99, precioAntiguo:44.99, img:'public/pancakes.jpg'},
    { id: 3, nombre: "Avocado Toast", precio: 17.99, precioAntiguo:20.99, img:'public/avocado.jpg'},
    { id: 4, nombre: "Mermelada Casera", precio: 24.99, precioAntiguo:29.99, img:'public/orange.jpg'},
    // { id: 5, nombre: "Aceite de Oliva", precio: 74.99, precioAntiguo:100, img:'public/slider_1.jpg'},
    // { id: 6, nombre: "Hortalizas a Granel", precio: 8.90, precioAntiguo:10.99, img:'public/slider_2.jpg'},
    // { id: 7, nombre: "Croissant", precio: 16.99, precioAntiguo:19.99, img:'public/slider_3.jpg'},
    // { id: 8, nombre: "Mermelada de Limón", precio: 24.99, precioAntiguo:29.99, img:'public/slider_4.jpg'},
    // { id: 9, nombre: "Melón", precio: 20.00, precioAntiguo:30.00, img:'public/slider_5.jpg'},
    // { id: 10, nombre: "Nueces", precio: 10.99, precioAntiguo:15.99, img:'public/slider_6.jpg'},
    // { id: 11, nombre: "Café de Especialidad", precio: 14.00, precioAntiguo:20.00, img:'public/slider_7.jpg'},
    // { id: 12, nombre: "Torta Red Velvet", precio: 24.99, precioAntiguo:29.99, img:'public/slider_8.jpg'},

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

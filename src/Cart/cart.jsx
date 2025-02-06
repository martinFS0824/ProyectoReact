import { useReducer } from "react";
import { cartInitialSate, cartReducer } from "./cartReducer";
import Product from "./Product";
import { TYPES } from "./actionTypes";
import CartItem from "./CartItem";
import './cart.css'

const Cart = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialSate);

    const addToCart = (id)=>{
      dispatch({type: TYPES.ADD_TO_CART, payload:id})
    }
    const removeFromCart = (id) =>{
      dispatch({type: TYPES.REMOVE_ITEM, payload: id})
      
    }
    const clearCart = () =>{}
  return (
    <>
      <div className="cart-container">
        <div className="products">{state.products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)}</div>
        <div>{state.cart.map(item => <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />)}</div>
      </div>
    </>
  );
};
export default Cart;

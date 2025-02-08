import { useReducer } from "react";
import { cartInitialSate, cartReducer } from "./cartReducer";
import Product from "./Product";
import { TYPES } from "./actionTypes";
import CartItem from "./CartItem";
import './cart.css'

const Cart = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialSate);

    const addToCart = (id)=>{
      dispatch({type: TYPES.ADD_TO_CART, payload:id});
    }
    const removeFromCart = (id) =>{
      dispatch({type: TYPES.REMOVE_ITEM, payload: id});
      
    }
    const removeAllItems = (id) =>{
      dispatch({type:TYPES.REMOVE_ALL_ITEMS, payload:id});
    }
    const clearCart = () =>{
      dispatch({type:TYPES.CLEAR_CART});
    }
  return (
    <>
      <div className="cart-container">
        <div className="products">{state.products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)}</div>
      </div>
      {state.cart.length> 0 && <button style={{backgroundColor:"#FF6961"}} onClick={clearCart}>Vaciar Carrito</button>}
      <div>{state.cart.map(item => <CartItem key={item.id} item={item} removeFromCart={removeFromCart} removeAllItems={removeAllItems}/>)}</div>
    </>
  );
};
export default Cart;

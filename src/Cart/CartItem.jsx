const CartItem= ({item, removeFromCart})=>{
    const {id, nombre, precio, cantidad} = item;
    return (
        <div className="cart-items">
            <h4>{nombre}</h4>
            <h5>$ {precio}</h5>
            <h5>X {cantidad}</h5>
            <button onClick={()=>removeFromCart(id)}>eliminar</button>
        </div>
    )
}
export default CartItem
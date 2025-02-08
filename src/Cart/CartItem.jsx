const CartItem= ({item, removeFromCart,removeAllItems})=>{
    const {id, nombre, precio, cantidad} = item;
    return (
        <div className="cart-items">
            <h4>{nombre}</h4>
            <h5>$ {precio}</h5>
            <h5>X {cantidad}</h5>
            <h5>${precio * cantidad}</h5>
            <button onClick={()=>removeFromCart(id)}>eliminar</button>
            <button className="quitarTodos" onClick={()=>removeAllItems(id)} title="eliminar todos">✖</button>
        </div>
    )
}
export default CartItem
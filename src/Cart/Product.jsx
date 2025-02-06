import AddButton from "../AddButton";

const Product = ({product, addToCart}) =>{
    const {id, nombre, precio, precioAntiguo,img} = product;
    return(
        
        <div className="figure">
            <img src={img} alt={nombre} />
            <div className="figcaption">
            <h4>{nombre}</h4>
            <div className="precios-container">
            <span>$ {precio}</span>
            <span><s>$ {precioAntiguo}</s></span>
            </div>
            <button onClick={()=>addToCart(id)}>Compra rápida</button>
            </div>
            {/* <AddButton nombre='Compra rápida'></AddButton> */}
        </div>
    )
}
export default Product
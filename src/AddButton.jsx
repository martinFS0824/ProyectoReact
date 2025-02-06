import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { CartProvider } from "./context/CartContext"

function AddButton(props){
    const {dispatch} = useContext(CartContext)

    return(
        <>
            <button onClick={()=>dispatch({type:"AddItem"})}>{props.nombre}</button>
        </>
    )
}

export default AddButton
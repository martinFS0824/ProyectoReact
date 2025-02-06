import './card.css'
import AddButton from './AddButton'
function Card(props){
    return(
        <>
        <figure>
            <img src={props.img} alt={props.nombre} />
            <figcaption>
                <h4>{props.nombre}</h4>
                <div className="precios-container">
                <span>{'$'+props.precio1}</span>
                <span><s>{'$'+props.precio2}</s></span>
                </div>
                <AddButton nombre='Quick shop' />
            </figcaption>
        </figure>
        </>
    )
}

export default Card
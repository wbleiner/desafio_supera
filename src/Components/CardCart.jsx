import "./CardCart.css"
import React, { useContext } from "react"
import { BsTrash } from 'react-icons/bs'
import { CartContext } from "../contexts/CartContext/CartContext"


const CardCart = props => {
    const { handleRemoveItem } = useContext(CartContext)
    return (
        <div className="CardCart">
            <img src={`./assets/${props.image}`} width="100px" alt="" />
            <div className="Prod">
                <span className="Name">{props.name}</span>
                <button className="Trash" onClick={() => { handleRemoveItem(props.index) }}><BsTrash size={25} /></button>
            </div>
           
            <span className="UnitPrice">{props.price}</span>
            
        </div>
    )
}
export default CardCart
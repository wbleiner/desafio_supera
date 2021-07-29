import './Card.css'
import React, { useContext } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import {CartContext} from '../contexts/CartContext/CartContext'


const Card = props => {
    const {handleAddItem, Cart}=useContext(CartContext)
    const price=  props.price.toFixed(2).toString().replace('.',',')
   
    return (
        <div className="Card">
            <img src={`./assets/${props.image}`} alt={props.name} />
            <div className="NameProduct">
                <span>{props.name}</span>
            </div>
            <div className="DetailsPrice">
                <p>{`R$ ${price}`}</p>
                <button className="AddCart" onClick={()=>{handleAddItem(props.name, props.price, props.image, props.id, props.index)}}><MdAddShoppingCart size={25} /></button>
            </div>
        </div>
    )
}
export default Card
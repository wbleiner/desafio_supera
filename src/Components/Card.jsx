import './Card.css'
import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'


const Card = props => {
    const price=  props.price.toFixed(2).toString().replace('.',',')
    
    return (
        <div className="Card">
            <img src={`./assets/${props.image}`} alt={props.name} />
            <div className="NameProduct">
                <span>{props.name}</span>
            </div>
            <div className="DetailsPrice">
                <p>{`R$ ${price}`}</p>
                <button className="AddCart"><MdAddShoppingCart size={21} /></button>
            </div>
        </div>
    )
}
export default Card
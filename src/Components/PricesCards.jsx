import './PricesCard.css'
import React from 'react';


const PricesCard = props => {
    const style ={
        color: props.color
    }
    return (
        <div className="PricesCard" style={style} >
            <h2>{props.title}</h2>
            <h2>{props.value}</h2>
        </div>
    )
}
export default PricesCard
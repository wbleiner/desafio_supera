import './Home.css'
import React, { useState } from 'react'
import Card from './../Components/Card';
import Products from '../data/products.json'


const Home = () => {
    const [itemSelected, setItemSelected] = useState("standard")
    const [orderedProducts, setOrderedProducts] = useState(Products)

    function updateOrdered(item) {
        switch (item) {
            case "name":
                setOrderedProducts(orderedProducts.sort((a, b) => {
                    return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
                }))
                break;

            case "lowestprice":
                setOrderedProducts(orderedProducts.sort((a, b) => {
                    return a.price-b.price;
                }))
                break;
            case "biggestprice":
                setOrderedProducts(orderedProducts.sort((a, b) => {
                    return b.price-a.price;
                }))
                break;

            case "score":
                setOrderedProducts(orderedProducts.sort((a, b) => {
                    return (a.score > b.score) ? 1 : ((b.score > a.score) ? -1 : 0);
                }))
                break;

            default:
                break;
        }
    }

    return (
        <div className="Home">
            <div className="Select">
                <label>Ordenado por:  </label>
                <select value={itemSelected} onChange={e => { 
                    setItemSelected(e.target.value) 
                    updateOrdered(e.target.value) 
                }}>
                    <option value="standard">Escolha uma opção</option>
                    <option value="name">Nome</option>
                    <option value="lowestprice">Menor preço</option>
                    <option value="biggestprice">Maior preço</option>
                    <option value="score">Score</option>
                </select>
            </div>
            <div className="Container">
                {orderedProducts.map((product) => {
                    return <Card key={product.id} name={product.name} image={product.image} price={product.price} />
                }
                )}
            </div>
        </div>
    )
}
export default Home
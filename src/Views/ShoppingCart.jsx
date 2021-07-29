import './ShoppingCart.css'
import React, { useContext, useEffect, useState } from 'react'
import CardCart from './../Components/CardCart';
import PricesCard from './../Components/PricesCards';
import { CartContext } from './../contexts/CartContext/CartContext';

const ShoppingCart = props => {
    const { Cart, clearCart } = useContext(CartContext)
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [frete, setFrete] = useState(0)
    const [cupom, setCupom] = useState(0)
    
    useEffect(() => {
        var sub = 0
        Cart.forEach(item => {
            sub = sub + item.price
        });
        setSubtotal(sub)
        if (sub<250) {
            setFrete(Cart.length*10)
        }
        else{
            setFrete(0)
        }
        
        setTotal(subtotal+frete)
    }, [Cart])
    
    return (
        <>
           {!Cart.length? 
           <div className="EmptyCart">
               <h2 >Ops, seu carrinho está vazio.</h2>
               <img src="./carrinhovazio.png" alt="" />
           </div>:
            <div className="ShoppingCart">
                <div className="Description">
                    <h2 className="NameProduct">Produto</h2>
                    <h2>Preço Unitário</h2>

                </div>
                <div className="Cards">
                    {Cart.map((item, index) => {
                        
                        return <CardCart key={index} name={item.name} price={item.price} image={item.urlImage} index={index} />
                    })}
                    <button className= "BtnClear" onClick={clearCart}>Limpar carrinho</button>
                </div>

                <div className="Checkout">
                    <div className="Discount">
                        <h1 className="Head">CUPOM DE DESCONTO</h1>
                        <h2 className="CouponCode">CÓDIGO DO CUPOM</h2>
                        <form className="Form">
                            <span className="ItalicText">Se você tem um cupom, digite na caixa abaixo.</span>
                            <div className="Coupon">
                                <input className="CouponInput" type="text" placeholder="Cupom" onChange={e =>{}} />
                                <button className="CouponButton" onClick={()=>{}}>Aplicar Cupom</button>
                            </div>
                        </form>
                    </div>
                    <div className="Deitals">
                        <h1 className="Head">DETALHES DA COMPRA</h1>
                        <h6 className="ItalicText">O frete de cada produto é calculado automaticamente, cada produto possui o preço de frete de R$ 10,00.</h6>
                        <span>O frete é grátis para compras acima de <b>R$ 250,00</b>.</span>
                        <div className="DeitalsPrice">
                            <PricesCard title="Subtotal" value={subtotal}></PricesCard>
                            <PricesCard title="Cupom" value={cupom} color="#5a8e5a"></PricesCard>
                            <PricesCard title="Frete" value={frete}></PricesCard>
                            <PricesCard title="Total" value={total}></PricesCard>
                            <button className="CouponButton" style={{ background: "#5a8e5a", color: "white" }}>Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}
export default ShoppingCart
import './ShoppingCart.css'
import React, { useContext, useEffect, useState } from 'react'
import CardCart from './../Components/CardCart';
import PricesCard from './../Components/PricesCards';
import { CartContext } from './../contexts/CartContext/CartContext';

const arrayCoupons = [
    {
        code: 'Desc15',
        discount: 15
    },
    {
        code: 'Desc20',
        discount: 20
    },
    {
        code: 'Desc25',
        discount: 20
    },
    {
        code: 'Desc30',
        discount: 20
    }
];

const ShoppingCart = props => {
    const { Cart, clearCart } = useContext(CartContext)
    const [subtotal, setSubtotal] = useState(0)
    const [total, setTotal] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [coupon, setCoupon] = useState('')
    const [appliedCoupon, setAppliedCoupon] = useState(0)
    const [erroCoupon, setErroCoupon] = useState(0)


    useEffect(() => {
        var sub = 0
        Cart.forEach(item => {
            sub = sub + item.price
        });
        setSubtotal(sub)
        if (sub < 250) {
            setShipping((Cart.length * 10) - appliedCoupon)
        }
        else {
            setShipping(0)
        }
        setTotal(sub + (Cart.length * 10) - appliedCoupon)
    }, [Cart, appliedCoupon])
    const ApplyCoupon = () => {
        
        const newCoupon = arrayCoupons.find(item => item.code.toLocaleUpperCase() == coupon.toLocaleUpperCase())
        console.log(newCoupon)
        if (newCoupon) {
            setErroCoupon(false)
            setAppliedCoupon(newCoupon.discount);
        }
        else {
            setErroCoupon(true)
            setAppliedCoupon(0);
        }

    }
    const formatValueReal = (value) => {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
    return (
        <>
            {!Cart.length ?
                <div className="EmptyCart">
                    <h2 >Ops, seu carrinho está vazio.</h2>
                    <img src="./carrinhovazio.png" alt="" />
                </div> :
                <div className="ShoppingCart">
                    <div className="Description">
                        <h2 className="NameProduct">Produto</h2>
                        <h2>Preço Unitário</h2>

                    </div>
                    <div className="Cards">
                        {Cart.map((item, index) => {

                            return <CardCart key={index} name={item.name} price={item.price} image={item.urlImage} index={index} />
                        })}
                        <button className="BtnClear" onClick={() => clearCart()}>Limpar carrinho</button>
                    </div>

                    <div className="Checkout">
                        <div className="Discount">
                            <h1 className="Head">CUPOM DE DESCONTO</h1>
                            <h2 className="CouponCode">CÓDIGO DO CUPOM</h2>

                            <span className="ItalicText">Se você tem um cupom, digite na caixa abaixo.</span>
                            <div className="Coupon">
                                <input className="CouponInput" type="text" placeholder="Cupom" onChange={e => setCoupon(e.target.value)} />

                                <button id="wqqweqwe" className="CouponButton" onClick={() => ApplyCoupon()}>Aplicar Cupom</button>
                            </div>
                            <br />
                            {erroCoupon ? <h2>Cupom Inválido!</h2>:''}
                            
                        </div>
                        <div className="Deitals">
                            <h1 className="Head">DETALHES DA COMPRA</h1>
                            <h6 className="ItalicText">O frete de cada produto é calculado automaticamente, cada produto possui o preço de frete de R$ 10,00.</h6>
                            <span>O frete é grátis para compras acima de <b>R$ 250,00</b>.</span>
                            <div className="DeitalsPrice">
                                <PricesCard title="Subtotal" value={formatValueReal(subtotal)}></PricesCard>
                                <PricesCard title="Cupom" value={formatValueReal(appliedCoupon)} color="#5a8e5a"></PricesCard>
                                <PricesCard title="Frete" value={formatValueReal(shipping)}></PricesCard>
                                <PricesCard title="Total" value={formatValueReal(total)}></PricesCard>
                                <button className="CouponButton" style={{ background: "#5a8e5a", color: "white" }}>Finalizar Compra</button>
                            </div>
                        </div>
                    </div>
                </div >}
        </>
    )
}
export default ShoppingCart
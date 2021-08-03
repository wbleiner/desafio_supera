import './Navbar.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext/CartContext'


const Navbar = props => {
    const [menu, setMenu] = useState('')
    const { Cart } = useContext(CartContext)

    return (
        <div>
            <header className="Header">
                <Link to="/"><img className="Logo" src="./gamestore.png" alt="Game Store" /></Link>
                <nav className={`Nav ${menu}`}>
                    <button className="Btn-Mobile" onClick={() => { !menu  ? setMenu('Active') : setMenu('') }} >
                    {!menu ? <AiOutlineMenu size={29} /> : <AiOutlineClose size={29} />}
                    </button>
                    <ul className="Menu">
                        <li><Link to="/" onClick ={()=>{setMenu('')}}>Ínicio</Link ></li>
                        
                        <li ><Link to="/shoppingcart" onClick ={()=>{setMenu('')}}>
                            Carrinho <span className="NumberOnCart" >{Cart.length ? Cart.length : ''}</span>
                        </Link ></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Navbar
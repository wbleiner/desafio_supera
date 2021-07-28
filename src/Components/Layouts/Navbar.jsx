import './Navbar.css'
import { AiOutlineMenu } from 'react-icons/ai'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = props => {
    const [menu, setMenu] = useState('')


    return (
        <div>
            <header className="Header">
                <Link to = "/"><img className ="Logo"src="./gamestore.png" alt="Game Store" /></Link>
                <nav className={`Nav ${menu}`}>
                    <button className="Btn-Mobile" onClick={() => { menu === '' ? setMenu('Active') : setMenu('') }} >
                        <AiOutlineMenu size={29} />
                    </button>
                    <ul className="Menu">
                        <li><Link to="/">Ínicio</Link ></li>
                        <li><Link to="/contact">Contato</Link ></li>
                        <li><Link to="/shoppingcart">Carrinho</Link ></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default Navbar
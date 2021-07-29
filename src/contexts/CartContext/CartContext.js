import { createContext, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
   const [Cart, setCart] = useState([])
    
    
    function handleAddItem(name, price, urlImage,id) {
        const item = { name, price, urlImage, id  }
        setCart([...Cart, item])
        
    }

    function handleRemoveItem(itemIndex) {
        const filteredCart = Cart.filter(
            item => Cart.indexOf(item) !== itemIndex
        )
        setCart(filteredCart)
        
    }

    function clearCart() {
        setCart([])
    }


    return (
        <CartContext.Provider value={{Cart, handleAddItem, handleRemoveItem, clearCart}} >{children}</CartContext.Provider>
    )
}
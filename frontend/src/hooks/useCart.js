import { useContext } from "react"
import { CartContext } from "../context/CartProvider"

//custom hook for context
const useCart = () => {
    return useContext(CartContext);
}

export default useCart;
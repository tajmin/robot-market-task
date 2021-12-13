import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { initialCartState } from "../store/cartStore";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    useEffect(() => {
        fetch('http://localhost:8000/api/robots')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'INITIALIZE_ROBOTS',
                    payload: {
                        ...initialCartState,
                        robots: data?.data
                    }
                });
            });
    }, []);

    console.log(state)

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;
import { createContext, useEffect, useReducer, useState } from "react";
import useRobots from "../hooks/useRobots";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const initialState = {
        robots: [],
        cart: []
    }
    const [state, dispatch] = useReducer(cartReducer, initialState);
    useEffect(() => {
        fetch('http://localhost:8000/api/robots')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'INITIALIZE_ROBOTS',
                    payload: {
                        ...initialState,
                        robots: data?.data
                    }
                });
            });
    }, []);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
export default CartProvider;
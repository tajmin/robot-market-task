import React from 'react';
import useCart from '../../../../hooks/useCart';
import { formattedPrice } from '../../../../utility/utils';

const CartProduct = ({ cartProduct }) => {
    const { image, name, price, quantity, stock } = cartProduct;
    const { state, dispatch } = useCart();

    const hadnleQuantity = (param) => {
        if (param) {
            if (stock > 0) {
                cartProduct.quantity += 1;
                cartProduct.stock -= 1;
                dispatch({ type: 'UPDATE_ITEM_QUANTITY', payload: cartProduct })
            }
        } else {
            if (quantity > 1) {
                cartProduct.quantity -= 1;
                cartProduct.stock += 1;
                dispatch({ type: 'UPDATE_ITEM_QUANTITY', payload: cartProduct })
            }
        }
    }

    return (
        <div className="flex bg-blue-100 mb-3 shadow-lg rounded-b-lg">
            <div className="flex p-2">
                <img className="rounded-full h-24 w-24 m-auto border-2 border-gray-100" src={image} alt="" />
            </div>
            <div className="py-3 flex flex-grow bg-white">
                <div className="px-4 w-48">
                    <h1 className="text-lg">{name}</h1>
                    <p>Quantity {quantity}</p>
                    <p>Price {formattedPrice(price)}</p>
                </div>
                <div className="flex flex-col m-auto text-lg gap-4">
                    <div>
                        <button onClick={() => hadnleQuantity(false)} className="py-0.5 px-4 bg-gray-300 font-semibold">-</button>
                        <button className="py-0.5 px-4 bg-gray-100 font-semibold">{quantity}</button>
                        <button onClick={() => hadnleQuantity(true)} className="py-0.5 px-4 bg-gray-300 font-semibold">+</button>
                    </div>
                    <div>
                        <button className="py-1 px-2 bg-red-500 text-white">Remove</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartProduct;
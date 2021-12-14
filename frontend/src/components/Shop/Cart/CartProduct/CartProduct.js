import { TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import useCart from '../../../../hooks/useCart';
import { formattedPrice } from '../../../../utility/utils';

const CartProduct = ({ cartProduct }) => {
    const { image, name, price, quantity, stock } = cartProduct;
    const { dispatch } = useCart();

    // update quantity handler for selected robot
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

    //handles remove robot from cart funcitionality
    const handleRemoveFromCart = () => {
        cartProduct.stock = cartProduct.quantity + cartProduct.stock;
        dispatch({ type: 'REMOVE_FROM_CART', payload: cartProduct })
    }

    return (
        <div className="flex bg-blue-100 mb-1 xl:mb-3 shadow-lg rounded-b-lg">
            <div className="hidden xl:block p-2">
                <img className="rounded-full h-24 w-24 m-auto border-2 border-gray-100" src={image} alt="" />
            </div>
            <div className="py-3 flex flex-col xl:flex-row flex-grow xl:bg-white">
                <div className="px-4 w-48">
                    <h1 className="text-lg">{name}</h1>
                    <p>Quantity {quantity}</p>
                    <p>Price {formattedPrice(price)}</p>
                </div>
                <div className="flex flex-row xl:flex-col mx-4 mt-1 xl:m-auto text-lg gap-4">
                    <div>
                        <button onClick={() => hadnleQuantity(false)} className="xl:py-0.5 px-4 bg-gray-300 font-semibold">-</button>
                        <button className="xl:py-0.5 px-4 bg-gray-100 font-semibold">{quantity}</button>
                        <button onClick={() => hadnleQuantity(true)} className="xl:py-0.5 px-4 bg-gray-300 font-semibold">+</button>
                    </div>
                    <div>
                        <button onClick={() => { handleRemoveFromCart() }}
                            className="inline-flex justify-center items-center transition duration-300 border border-red-500 bg-red-500 xl:py-1 px-1.5 hover:bg-red-700 hover:border-red-700 text-white rounded"
                        >
                            <TrashIcon className="ml-1 h-4 w-4"></TrashIcon>
                            <span className="ml-1">Remove</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartProduct;
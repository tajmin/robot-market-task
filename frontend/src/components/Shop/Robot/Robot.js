import { ShoppingCartIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import useCart from '../../../hooks/useCart';
import { formattedDate, formattedPrice } from '../../../utility/utils';

const Robot = ({ robot }) => {
    const { createdAt, image, material, name, price, stock } = robot;
    const { state, dispatch } = useCart();
    const isDisabled = !stock;

    const handleAddToCart = () => {
        robot.stock -= 1;
        dispatch({ type: 'ADD_TO_CART', payload: robot })
    }

    const handleRemoveFromCart = () => {
        robot.stock += 1;
        dispatch({ type: 'REMOVE_FROM_CART', payload: robot })
    }

    return (
        <div className="bg-blue-50 py-1 rounded-lg shadow-xl">
            <div>
                <img className="mx-auto" src={image} alt="a robot" />
            </div>
            <div className="text-center py-3">
                <h1 className="mt-4 mb-2 text-2xl">{name}</h1>
                <h2 className="text-gray-500 text-xl font-bold mb-4">{formattedPrice(price)}</h2>
                <div className="h-28 text-gray-500">
                    <p className="mb-1">Made of {material}</p>
                    <p className="mb-2">Created On {formattedDate(createdAt)}</p>
                    {stock > 0 && <p className="mb-3">{stock} left in stock</p>}
                    {stock < 1 && <p className="text-white bg-red-500 mb-3 inline-block py-0.5 px-1.5 rounded">{stock} left in stock</p>}
                </div>
                <div>
                    {
                        state.cart.some((item) => item.createdAt === robot.createdAt) ? (
                            <button onClick={() => handleRemoveFromCart()}
                                className="inline-flex justify-center items-center transition duration-300 border border-red-500 bg-red-500 px-2 py-1 hover:bg-red-700 hover:border-red-700 text-white rounded"
                            >
                                <TrashIcon className="ml-1 h-6 w-6"></TrashIcon>
                                <span className="text-lg font-semibold ml-2">Remove from Cart</span>
                            </button>

                        ) : (
                            <button onClick={() => handleAddToCart()}
                                className={`inline-flex justify-center items-center transition duration-300 border border-gray-500 px-3 py-1 rounded ${isDisabled ? 'opacity-25' : 'hover:bg-blue-400 hover:border-blue-400 hover:text-white'}`} disabled={isDisabled}
                            >
                                <ShoppingCartIcon className="ml-2 h-6 w-6"></ShoppingCartIcon>
                                <span className="text-lg font-semibold ml-2">Add to Cart</span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Robot;
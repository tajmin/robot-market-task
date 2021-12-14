import React from 'react';
import useCart from '../../../hooks/useCart';
import addCartIcon from '../../../images/add-to-cart.png'
import { formattedPrice } from '../../../utility/utils';

const Robot = ({ robot }) => {
    const { createdAt, image, material, name, price, stock } = robot;
    const { state, dispatch } = useCart();
    const date = new Date(createdAt);
    const isDisabled = !stock;

    const handleAddToCart = () => {
        robot.stock -= 1;
        console.log(robot)
        dispatch({ type: 'ADD_TO_CART', payload: robot })
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
                    <p className="mb-2">Created On {date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}</p>
                    {stock > 0 && <p className="mb-3">{stock} left in stock</p>}
                    {stock < 1 && <p className="text-white bg-red-500 mb-3 inline-block py-0.5 px-1.5 rounded">Sold Out</p>}
                </div>
                <div>
                    {/* conditionally applying classnames to button based on disabled status */}
                    {
                        state.cart.some((item) => item.createdAt === robot.createdAt) ? (
                            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: robot })}
                                className="transition duration-300 border border-red-500 bg-red-500 px-3 py-2 hover:bg-red-700 hover:border-red-700 text-white"
                            >Remove from Cart</button>

                        ) : (
                            <button onClick={() => handleAddToCart()}
                                className={`inline-flex justify-center items-center transition duration-300 border border-gray-500 px-3 py-1 ${isDisabled ? 'opacity-25' : 'hover:bg-blue-400 hover:border-blue-400 hover:text-white'}`} disabled={isDisabled}
                            >
                                <img src={addCartIcon} alt="add to cart icon" />
                                <span className="text-lg font-semibold ml-3">Add to Cart</span>
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Robot;
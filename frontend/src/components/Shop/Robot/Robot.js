import React, { useReducer } from 'react';
import addCartIcon from '../../../images/add-to-cart.png'
import { cartReducer } from '../../../reducers/cartReducer';
import { cartStore } from '../../../store/cartStore';

const Robot = ({ robot }) => {
    const { createdAt, image, material, name, price, stock } = robot;
    const [state, dispatch] = useReducer(cartReducer, cartStore);
    const date = new Date(createdAt);
    const isDisabled = !stock;

    return (
        <div className="bg-blue-50 py-1 rounded-lg shadow-xl">
            <div>
                <img className="mx-auto" src={image} alt="a robot" />
            </div>
            <div className="text-center py-3">
                <h1 className="mt-4 mb-2 text-2xl">{name}</h1>
                <h2 className="text-gray-500 text-xl font-bold mb-4">{new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(price)}</h2>
                <div className="h-28 text-gray-500">
                    <p className="mb-1">Made of {material}</p>
                    <p className="mb-2">Created On {date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()}</p>
                    {stock > 0 && <p className="mb-3">{stock} left in stock</p>}
                    {stock < 1 && <p className="text-white bg-red-500 mb-3 inline-block py-0.5 px-1.5 rounded">Sold Out</p>}
                </div>
                <div>
                    {/* conditionally applying classnames to button based on disabled status */}
                    <button onClick={() => dispatch({ type: 'ADD_TO_CART', robot })}
                        className={`inline-flex justify-center items-center transition duration-300 border border-gray-500 px-3 py-1 ${isDisabled ? 'opacity-25' : 'hover:bg-blue-400 hover:border-blue-400 hover:text-white'}`} disabled={isDisabled}>
                        <img src={addCartIcon} alt="add to cart icon" />
                        <span className="text-lg font-semibold ml-3">Add to Cart</span>
                    </button>
                    <p>Length: {state.robots.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Robot;
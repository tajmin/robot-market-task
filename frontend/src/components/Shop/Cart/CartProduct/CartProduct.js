import React from 'react';

const CartProduct = ({ props }) => {
    const { image, name, price, quantity } = props;
    console.log(props);
    return (
        <div className="flex bg-gray-50 mb-2 shadow-lg rounded-b-lg">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="py-3 flex flex-grow">
                <div className="px-4 w-48">
                    <h1 className="text-lg">{name}</h1>
                    <p>Quantity {quantity}</p>
                    <p>Price {price}</p>
                </div>
                <div className="flex m-auto text-lg">
                    <button className="py-0.5 px-3 bg-gray-200 font-semibold">-</button>
                    <button className="py-0.5 px-3 bg-gray-100 font-semibold">{quantity}</button>
                    <button className="py-0.5 px-3 bg-gray-200 font-semibold">+</button>
                </div>
            </div>

        </div>
    );
};

export default CartProduct;
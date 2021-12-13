import React from 'react';
import useCart from '../../../hooks/useCart';
import Cart from '../Cart/Cart';
import Robots from '../Robots/Robots';

const Shop = () => {
    const { state } = useCart();
    console.log(state);
    return (
        <div>
            <div className="bg-blue-200 py-20">
            </div>
            <div className="container mx-auto grid xl:grid-cols-9 gap-16">
                <div className="col-span-2 py-24 bg-blue-200">
                </div>
                <div className="col-span-5 bg-white py-24">
                    <Robots></Robots>
                </div>
                <div className="col-span-2 bg-blue-100 py-24">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
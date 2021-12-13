import React from 'react';
import Cart from '../Cart/Cart/Cart';
import Robots from '../Robots/Robots';

const Shop = () => {
    return (
        <div>
            <div className="bg-blue-200 py-20">
            </div>
            <div className=" mx-auto grid xl:grid-cols-10 gap-16">
                <div className="col-span-2 py-24 bg-blue-200">
                </div>
                <div className="col-span-5 bg-white py-12">
                    <Robots></Robots>
                </div>
                <div className="col-span-3 py-12 px-5">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;
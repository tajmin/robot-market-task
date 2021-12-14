import React, { useEffect, useState } from 'react';
import useCart from '../../../../hooks/useCart';
import { formattedPrice } from '../../../../utility/utils';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const { state: { cart } } = useCart();
    const [totalPrice, setTotalPrice] = useState();
    const [totalRobots, setTotalRobots] = useState();

    //Calculating total price and number of selected robots
    useEffect(() => {
        setTotalPrice(cart.reduce((previous, current) => previous + parseFloat(current.price) * current.quantity, 0.0));
        setTotalRobots(cart.reduce((previous, current) => previous + current.quantity, 0))
    }, [cart])

    return (
        <div>
            {
                cart.map(item => <CartProduct
                    key={item.createdAt} cartProduct={item}
                ></CartProduct>
                )
            }
            {
                cart.length ? <div className="px-4">
                    <div className="flex justify-between">
                        <h1 className="xl:text-xl">Total Robots Selected</h1>
                        <h1 className="xl:text-xl">{totalRobots}</h1>
                    </div>
                    <div className="flex justify-between">
                        <h1 className="xl:text-xl">Total Price</h1>
                        <h1 className="xl:text-xl">{formattedPrice(totalPrice)}</h1>
                    </div>
                </div> :
                    <div className="text-center p-10 bg-gray-50">
                        <h1 className="xl:text-xl font-bold">Cart is empty</h1>
                    </div>
            }
        </div>
    );
};

export default Cart;
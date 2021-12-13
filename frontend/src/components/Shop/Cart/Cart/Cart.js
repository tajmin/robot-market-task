import React from 'react';
import useCart from '../../../../hooks/useCart';
import CartProduct from '../CartProduct/CartProduct';

const Cart = () => {
    const { state, dispatch } = useCart();
    return (
        <div>
            {
                state.cart.map(item => <CartProduct
                    key={item.createdAt} props={item}
                ></CartProduct>
                )
            }
        </div>
    );
};

export default Cart;
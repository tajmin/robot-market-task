import React from 'react';
import useCart from '../../../hooks/useCart';
import Robot from '../Robot/Robot';

const Robots = () => {
    const { state } = useCart();

    return (
        <div className="grid grid-cols-2 gap-12">
            {
                state?.robots.map(item => <Robot
                    key={item.createdAt}
                    robot={item}
                ></Robot>)
            }
        </div>
    );
};

export default Robots;
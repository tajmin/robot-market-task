import React from 'react';
import useCart from '../../../hooks/useCart';
import Robot from '../Robot/Robot';

const Robots = () => {
    const { state } = useCart();

    return (
        <div className="grid xl:grid-cols-3 gap-12 p-10 xl:p-0">
            {/* populating robot cards from context by passing props to Robot component */}
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
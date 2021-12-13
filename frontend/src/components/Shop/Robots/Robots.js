import React from 'react';
import useRobots from '../../../hooks/useRobots';
import Robot from '../Robot/Robot';

const Robots = () => {
    const { robots } = useRobots();
    return (
        <div className="grid grid-cols-2 gap-16">
            {
                robots.map(item => <Robot
                    key={item.createdAt}
                    robot={item}
                ></Robot>)
            }
        </div>
    );
};

export default Robots;
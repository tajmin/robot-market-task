export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let cart = [];
            let newItem = { ...action.robot };
            const existingItem = state.robots.find(robot => robot.createdAt === newItem.createdAt);
            const remainingItems = state.robots.filter(robot => robot.createdAt !== newItem.createdAt)
            if (existingItem) {
                existingItem.quantity += 1;
                cart = [...remainingItems, existingItem];
            } else {
                newItem.quantity = 1;
                cart = [...state.robots, newItem];
            }
            // const existingRobot = state.robots.find(robot => robot.createdAt === newItem.createdAt);
            // if (existingRobot) {
            //     cart = [...state.robots];
            // } else {
            //     cart = [...state.robots, newItem];
            //     console.log(cart);
            // }
            console.log(cart);
            return {
                ...state,
                robots: cart
            }

        case 'INITIALIZE_ROBOTS':
            return action.payload;

        default:
            return state;
            break;
    }
}
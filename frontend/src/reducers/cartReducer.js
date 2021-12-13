export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.createdAt !== action.payload.createdAt)
            }

        case 'INITIALIZE_ROBOTS':
            return action.payload;

        default:
            return state;
            break;
    }
}
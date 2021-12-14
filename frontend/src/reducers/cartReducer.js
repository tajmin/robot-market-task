export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.cart.length < 5) {
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
            } else {
                alert('You can select 5 different robots at max!')
                return state;
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.createdAt !== action.payload.createdAt)
            }

        case 'UPDATE_ITEM_QUANTITY':
            //const newCart = state.cart.filter(item => item.createdAt !== action.payload.createdAt)
            console.log(action.payload);
            return {
                ...state,
                cart: [
                    ...state.cart.filter(item => item.createdAt !== action.payload.createdAt), action.payload
                ]
            }

        case 'INITIALIZE_ROBOTS':
            return action.payload;

        default:
            return state;
            break;
    }
}
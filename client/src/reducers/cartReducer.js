// cartReducer.js
export const cartInitialState = {
    items: [],
    total: 0,
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const item = action.payload;
            const exists = state.items.find((i) => i.id === item.id);

            let updatedItems;
            if (exists) {
                updatedItems = state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
            } else {
                updatedItems = [...state.items, { ...item, quantity: 1 }];
            }

            return {
                ...state,
                items: updatedItems,
                total: state.total + item.price,
            };

        case 'REMOVE_FROM_CART':
            const filteredItems = state.items.filter((i) => i.id !== action.payload.id);
            return {
                ...state,
                items: filteredItems,
                total: state.total - action.payload.price * action.payload.quantity,
            };

        case 'CLEAR_CART':
            return cartInitialState;

        default:
            return state;
    }
};

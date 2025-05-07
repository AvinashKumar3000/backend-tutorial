import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'product',
    initialState: {
        items: [], // array of strings
        count: 0
    },
    reducers: {
        addItem: (state,action) => {
            const { value } = action.payload;
            state.items.push(value);
            state.count = state.items.length;
        },
        removeItem: (state,action) => {
            const { removeIndex } = action.payload;
            const newList = [];
            for(let i=0; i<state.items.length; i++) {
                if(i!==removeIndex) {
                    newList.push(state.items[i]);
                }
            }
            state.items = newList;
            state.count = newList.length;
        }
    }
});

export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const userSlice =  createSlice({
    name: 'users',
    initialState: {
        name: {
            firstName: 'arun',
            lastName: 'kumar'
        },
        age: 0,
    },
    reducers: {
        updateName: (state,action) => {
            const { firstName, lastName } = action.payload;
            if(firstName)
                state.name.firstName = firstName;
            if(lastName)
                state.name.lastName = lastName;
        },
        updateAge: (state, action) => {
            const { age } = action.payload;
            if (age)
                state.age = age; 
        }
    },
});

export default userSlice.reducer;
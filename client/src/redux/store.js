import productReducer from "./slices/product.slice";
import userReducer from "./slices/users.slice";
import { configureStore  } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
    },
});

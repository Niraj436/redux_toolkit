import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Store/cartSlice"

const store = configureStore({
    reducer:{
        cart: cartReducer
    }
})

export default store
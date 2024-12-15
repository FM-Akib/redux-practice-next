import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../slices/counters/countersSlice";
const store = configureStore({
    reducer: {
        counters: countersReducer
    }
})
export default store;
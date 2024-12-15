import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../slices/counters/countersSlice";
import postsReducer from "../slices/posts/postsSlice";
const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsReducer
    }
})
export default store;
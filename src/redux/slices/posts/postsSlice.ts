import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getPosts } from "./postAPI"

const initialState ={
    posts: [],
    isLoading: false,
    isError : false,
    error: null as string | null
}
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const posts = await getPosts();
    return posts;
})
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message ?? null;
            });
    }
})

export default postsSlice.reducer;
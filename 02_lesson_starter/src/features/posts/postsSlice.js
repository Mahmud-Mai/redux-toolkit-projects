import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'Redux toolkit projects', content: 'Redux toolkit is a powerful tool. I love it'},
    { id: '2', title: 'Learning Slices', content: 'This is a slice'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducer: {

    }
})

export const selectAllPosts = state =>state.posts

export default postsSlice.reducer
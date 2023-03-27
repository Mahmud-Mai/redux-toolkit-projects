import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0'},
    { id: '1', name: 'Andrei Naegoie'},
    { id: '2', name: 'Peter Edache'},
    { id: '3', name: 'Abbati Kori'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users
export default usersSlice.reducer

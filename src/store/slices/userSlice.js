import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    id: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload;
            state.id = action.payload;
            state.token = action.payload;
        },
        removeUser(state) {
            state.email = null;
            state.id = null;
            state.token = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

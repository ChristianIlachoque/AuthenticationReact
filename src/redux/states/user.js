import { createSlice } from "@reduxjs/toolkit";
import { clearLocalStorage, persistLocalStorageUser } from "../../utilities/LocalStorageUtility";

export const EmptyUserState = {
    id: 0,
    name: "",
    email: "",
    rol: ""
}

export const UserKey = 'user';
export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            persistLocalStorageUser(UserKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        resetUser: () => {
            clearLocalStorage(UserKey);
            return EmptyUserState;
        }
    }
})

export const {
    createUser,
    updateUser,
    resetUser
} = userSlice.actions;

export default userSlice.reducer;
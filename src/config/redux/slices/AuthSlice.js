import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "AuthSlice",
    initialState: {
        loggedInUser:{
            "userType": "Admin"
        },
    },
    reducers: {
        setUser: (prevSlice, action)=>{
            prevSlice.loggedInUser = action.payload.userDetails
        },
        clearUser: (prevSlice, action)=>{
            prevSlice.loggedInUser = {};
        }
    }
});

const setUserAction = authSlice.actions.setUser;
const clearUserAction = authSlice.actions.clearUser;

export {authSlice, setUserAction, clearUserAction}
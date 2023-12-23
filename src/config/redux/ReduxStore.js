import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";
import { trainDetailsSlice } from "./slices/TrainDetails";

const combinedReducers = combineReducers({
    "AuthSlice": authSlice.reducer,
    "TrainDetailsSlice": trainDetailsSlice.reducer
})

const reduxStore = configureStore({
    reducer: combinedReducers
});

export default reduxStore;
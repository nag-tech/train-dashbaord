import { createSlice } from "@reduxjs/toolkit";

const trainDetailsSlice = createSlice({
        name: "TrainDetailsSlice",
        initialState: {
            "trainDetails": []
        },
        reducers:{
            setTrainDetails: (prevSlice, action)=>{
                prevSlice.trainDetails = action.payload;
            }
               
    }
});

const setTrainDetailsAction = trainDetailsSlice.actions.setTrainDetails;

export {trainDetailsSlice, setTrainDetailsAction}
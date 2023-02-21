import { createSlice } from '@reduxjs/toolkit'

const asyncReducerA = createSlice({
    name:"counterSliceA",
    initialState:{name:""},
    reducers:{
        hello(state,action){
            return {name:action.payload};
        }
    }
});

export  {actions,reducer};




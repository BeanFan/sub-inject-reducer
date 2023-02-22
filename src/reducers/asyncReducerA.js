import { createSlice } from '@reduxjs/toolkit'

const asyncReducerA = createSlice({
    name:"counterSliceA",
    initialState:{name:""},
    reducers:{
        hello(state,action){
            return {name:"Bean"};
        },
        hello1(state,action){
            return {name:"Jimmy"};
        }
    }
});




const  {actions,reducer} = asyncReducerA;

export const {hello,hello1} = actions;
export default  reducer;





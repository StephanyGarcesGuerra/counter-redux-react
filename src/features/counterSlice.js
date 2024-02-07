import { createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += Number(action.payload);
        },
        decrement: (state, action) => {
            state.value -= Number(action.payload);
        },
        reset:(state)  =>{
            state.value = 0;
        }
    },
});

//* actions
export const {increment, decrement, reset} = counterSlice.actions;
//* state selectors
export const selectCount = (state) => state.counter.value;
//* the below only exports by default the reducer
export default counterSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name:'item',
    initialState:{value:[]},
    reducers:{
        addItem: (state, action) => {
            const item = action.payload.item
            const id = action.payload.id
            state.value = [...state.value,{item,id}]
            
        }
    }
})

export const {addItem} = itemSlice.actions;
export default itemSlice.reducer;
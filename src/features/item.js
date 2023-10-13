import {createSlice} from '@reduxjs/toolkit'

export const itemSlice = createSlice({
    name:'item',
    initialState:{value:[],count:0},
    reducers:{
        addItem: (state, action) => {
            const item = action.payload.item
            const id = action.payload.id
            state.count += 1
            state.value = [...state.value,{item,id}]
            console.log(state.value)
            
        },
        deleteItem: (state, action) => {
            const itemToDelete = state.value.find((element) => element.id === action.payload.id)
            const newItemsList = state.value.filter ((element) => element.id !== itemToDelete.id)
            state.value = newItemsList
        },
        updateItem: (state, action) => {
            const newValue = state.value.filter((element) => element.id !== action.payload.id)
            state.value = newValue;
            state.value = [...state.value,action.payload]
            
        }
    }
})

export const {addItem,deleteItem,updateItem} = itemSlice.actions;
export default itemSlice.reducer;
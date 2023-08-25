import { createSlice } from '@reduxjs/toolkit'

export const listItems = createSlice({
    name: 'listItems',
    initialState: {
        value: ['item1', 'item-2']
    },
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload)
        },
        deleteItem: (state, action) => {
            console.log(action.payload)
            const removedIndex = action.payload
            state.value = state.value.filter((item, itemIndex) => removedIndex !== itemIndex)
        }
    }
})

export const ListItemsActions = listItems.actions


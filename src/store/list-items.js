import { createSlice } from '@reduxjs/toolkit'

export const listItems = createSlice({
    name: 'listItems',
    initialState: {
        value: [
            {
                title: 'dsdsds',
                description: 'dsdsd sds d sdsdadasd ad'
            },
            {
                title: 'dwdw',
                description: 'dsdsd sds d dsfgdfg ad'
            }
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.value.push(action.payload)
        },
        deleteItem: (state, action) => {
            const removedIndex = action.payload
            state.value = state.value.filter((item, itemIndex) => removedIndex !== itemIndex)
        }
    }
})

export const ListItemsActions = listItems.actions


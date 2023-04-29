import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flavour: ''
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData(state, action) {
            // state.flavour = action.payload.flavour
            state.flavour = 'dziala'
        }
    }
})

export const dataActions = dataSlice.actions
export default dataSlice
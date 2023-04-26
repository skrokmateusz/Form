import { createSlice } from "@reduxjs/toolkit";

const initialState = { isButtonClicked: false }

const validitySlice = createSlice({
    name: 'val',
    initialState: initialState,
    reducers: {
        buttonIsClicked(state) {
            state.isButtonClicked = true
        },
        buttonIsNotClicked(state) {
            state.isButtonClicked = false
        }
    }
})

export const valActions = validitySlice.actions
export default validitySlice
import { createSlice } from "@reduxjs/toolkit";

const initialState = { isButtonClicked: false }

const validitySlice = createSlice({
    name: 'val',
    initialState: initialState,
    reducers: {
        checkIsButtonClicked(state) {
            state.isButtonClicked = true
        }
    }
})

export const valActions = validitySlice.actions
export default validitySlice
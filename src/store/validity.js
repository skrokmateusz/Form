import { createSlice } from "@reduxjs/toolkit";

const initialState = { isNextStepButtonClicked: false, isSubmissionButtonClicked: false }

const validitySlice = createSlice({
    name: 'val',
    initialState: initialState,
    reducers: {
        buttonNextStepIsClicked(state) {
            state.isNextStepButtonClicked = true
        },
        buttonNextStepIsNotClicked(state) {
            state.isNextStepButtonClicked = false
        },
        buttonSubmissionIsClicked(state) {
            state.isSubmissionButtonClicked = true
        },
        buttonSubmissionIsNotClicked(state) {
            state.isSubmissionButtonClicked = false
        }
    }
})

export const valActions = validitySlice.actions
export default validitySlice
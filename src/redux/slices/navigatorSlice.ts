import { createSlice } from '@reduxjs/toolkit'

export interface State {
    selected: {
        latStart: number,
        lngStart: number,
        latMiddle: number,
        lngMiddle: number,
        latEnd: number,
        lngEnd: number
    } | null
}

const initialState: State = {
    selected: null
}

export const navigatorSlice = createSlice({
  name: 'navigator',
  initialState,
  reducers: {
    selectedHandler(state, action) {
        state.selected = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { selectedHandler } = navigatorSlice.actions

export default navigatorSlice.reducer
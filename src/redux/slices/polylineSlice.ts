import { createSlice } from '@reduxjs/toolkit'


export interface State {
    route: any,
    fetchPolylineErr: string,
    isPolylineFetching: boolean
}

const initialState: State = {
    route: {
        lonStart: 0,
        latStart: 0,
        lonMiddle: 0,
        latMiddle: 0,
        lonEnd: 0,
        latEnd: 0
    },
    fetchPolylineErr: '',
    isPolylineFetching: false
}

export const polylineSlice = createSlice({
  name: 'polyline',
  initialState,
  reducers: {
    setIsPolylineFetching: (state, { payload }) => {
        state.isPolylineFetching = payload
    },
    setPolylineData: (state, { payload }) => {
        state.route = payload
    },
    setFetchPolylineErr: (state, { payload }) => {
        state.fetchPolylineErr = payload
    }
  }
})

export const {
    setIsPolylineFetching,
    setPolylineData,
    setFetchPolylineErr
} = polylineSlice.actions
export default polylineSlice.reducer
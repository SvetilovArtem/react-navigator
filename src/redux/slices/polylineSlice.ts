import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getRoute } from '../../api/api'
import { AppDispatch, RootState } from '../store'

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

// const createAppAsyncThunk = createAsyncThunk.withTypes<{
//     state: RootState
//     dispatch: AppDispatch
//     rejectValue: string
//   }>()

// export const fetchPolyline = createAppAsyncThunk(
//     'polyline/fetchPolyline', getRoute
// )

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
  },
  extraReducers(builder) {
      // builder.addCase(fetchPolyline.fulfilled, (state, {payload}) => {
      //     state.route = payload.data
      //     state.fetchPolylineErr = ''
      // })
      // builder.addCase(fetchPolyline.rejected, (state) => {
      //     state.fetchPolylineErr = 'Маршрут не загрузился!'
      // })
      // builder.addCase(fetchPolyline.pending, state => {
      //     state.fetchPolylineErr = 'Маршрут загружается!'
      // })
  },
})

export const {
    setIsPolylineFetching,
    setPolylineData,
    setFetchPolylineErr
} = polylineSlice.actions
export default polylineSlice.reducer
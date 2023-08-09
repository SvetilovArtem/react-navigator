import { configureStore } from '@reduxjs/toolkit'
import navigatorReducer from './slices/navigatorSlice'
import polylineReducer from './slices/polylineSlice'
import { useDispatch } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {
    navigatorReducer,
    polylineReducer
  },
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
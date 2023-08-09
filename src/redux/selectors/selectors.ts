import { RootState } from "../store"

export const selectedRoute = (state:RootState) => state.navigatorReducer.selected
export const routeData = (state: RootState) => state.polylineReducer.route
export const fetchRouteError = (state: RootState) => state.polylineReducer.fetchPolylineErr
export const isFetching = (state: RootState) => state.polylineReducer.isPolylineFetching
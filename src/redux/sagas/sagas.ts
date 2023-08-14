import { takeEvery, call, select, put } from 'redux-saga/effects'
import {getRoute} from "../../api/api";
import {RootState} from "../store";
import {setFetchPolylineErr, setIsPolylineFetching, setPolylineData} from "../slices/polylineSlice";
export function* fetchPolyline() {
    const { selected } = yield select((state: RootState) => state.navigatorReducer)

    interface IArgs {
        lonStart: number;
        latStart: number;
        lonMiddle: number;
        latMiddle: number;
        lonEnd: number;
        latEnd: number;
    }
    const args: IArgs = {
        lonStart: selected?.lngStart || null,
        latStart: selected?.latStart || null,
        lonMiddle: selected?.lngMiddle || null,
        latMiddle: selected?.latMiddle || null,
        lonEnd: selected?.lngEnd || null,
        latEnd: selected?.latEnd || null
    }
    yield put(setIsPolylineFetching(true))
    try{
        // @ts-ignore
        const polylineData = yield call(getRoute, { ...args })
        yield put(setPolylineData(polylineData))
        yield put(setIsPolylineFetching(false))
        yield put(setFetchPolylineErr(''))
    } catch (err: any) {
        yield put(setIsPolylineFetching(false))
        yield put(setFetchPolylineErr(err.message))
    }
}

export function* fetchPolylineWatcher() {
    yield takeEvery(setPolylineData.type, fetchPolyline)
}

import { all, fork } from "redux-saga/effects";
import {fetchPolylineWatcher} from "./sagas";

export default function* rootSaga() {
    yield all([fork(fetchPolylineWatcher)])
}
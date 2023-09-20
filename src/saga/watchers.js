import { all } from "redux-saga/effects";
import { fetchUsersWatcher } from "./userSaga";

export function* rootWatcher() {
    yield all([fetchUsersWatcher()])
}
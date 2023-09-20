import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_USERS, setUsers } from '../store/userReducer'
import axios from 'axios'

const fetchUsersFromApi = () => axios.get('https://jsonplaceholder.typicode.com/users?_limit=10')

console.log(axios.get);

function* fetchUsersWorker() {
    const data = yield call(fetchUsersFromApi)
    console.log(data);

    yield put(setUsers(data.data))
}

export function* fetchUsersWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker)
}
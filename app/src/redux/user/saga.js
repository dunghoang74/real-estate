import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* updateLoggedInSections() {    
    yield takeEvery(actions.LOGGED_IN_USER, function* () { });
}

export default function* rootSaga() {
    yield all([
        fork(updateLoggedInSections),
    ]);
}
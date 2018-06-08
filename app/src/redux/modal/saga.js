import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* updateModalStatus() {    
    yield takeEvery(actions.UPDATE_STATUS, function* () { });
}

export default function* rootSaga() {
    yield all([
        fork(updateModalStatus),
    ]);
}
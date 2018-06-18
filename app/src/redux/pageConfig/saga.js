import { all, takeEvery, fork } from 'redux-saga/effects';
import actions from './actions';

export function* userPageConfiguration() {    
    yield takeEvery(actions.SETUP_PAGE_CONFIG, function* () { 


        
    });
}

export default function* rootSaga() {
    yield all([
        fork(userPageConfiguration),
    ]);
}
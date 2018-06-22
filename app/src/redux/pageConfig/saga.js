import { all, takeEvery, put, fork } from 'redux-saga/effects';
import actions from './actions';

export function* userPageConfiguration() {    
    yield takeEvery(actions.SETUP_PAGE_CONFIG, function* () {});
}

export function* savedColors() {    
    yield takeEvery(actions.SAVED_COLORS, function* () { console.log('saved colors')});
}

// export function* tokenExpired(status) {
	
//     console.log('va yeilddd ..llego a saga auth');
    
// 	yield takeEvery(actions.TOKEN_EXPIRED, function* () {

//         console.log('llego a saga auth');
        
// 		if(!status){
// 			yield put({ type: actions.TOKEN_EXPIRED, token_expired:false });
// 		}else{
// 			yield put({ type: actions.TOKEN_EXPIRED, token_expired:true });
			
// 		}
		
// 	});
// }

export default function* rootSaga() {
    yield all([
        fork(userPageConfiguration),
        fork(savedColors),
    ]);
}
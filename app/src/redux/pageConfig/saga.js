import axios from 'axios';
import { all, takeEvery, put, fork } from 'redux-saga/effects';
import actions from './actions';
import {getUsernameFromUrl} from '../../helpers/utility';
import config from '../../../src/config';

const uri = config.end_point_uri;

export function* userPageConfiguration() {    
    yield takeEvery(actions.SETUP_PAGE_CONFIG, function* () {});
}

export function* savedColors() {    
    yield takeEvery(actions.SAVED_COLORS, function* () { console.log('saved colors')});
}

export function* bootPageConfig() {
	yield takeEvery(actions.BOOT_PAGE_CONFIG, function* () {
        const userName = getUsernameFromUrl();

        if(userName !== 'app'){ 

            try{
                const pageInfo = yield axios.get(`${uri}/api/page/username/${userName}`);
                console.log('pageInfo:::', pageInfo.data._page);

                yield put({
                    type: actions.IS_USER,
                    is_user: true
                }); 
                yield put({
                	type: actions.PAGE_CONFIG,
                	user_page: pageInfo.data._page
                });

            }catch (err) {

                if(err.response.data.type === 'user_not_found'){
                    yield put({
                    	type: actions.IS_USER,
                    	is_user: false
                    }); 
                }
                if(err.response.data.type === 'page_not_found'){
                    yield put({
                    	type: actions.IS_USER,
                    	is_user: true
                    }); 
                }
            }

        }else{

            
        }
            
		
	});
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
        fork(bootPageConfig),
    ]);
}
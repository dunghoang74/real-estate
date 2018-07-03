import { all, takeEvery, put, fork } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { getToken, clearToken } from '../../helpers/utility';
import actions from './actions';
import axios from 'axios';
import config from '../../config';
import { getUsernameFromUrl } from '../../../src/helpers/utility';


const uri = config.end_point_uri;
const fakeApiCall = true; // auth0 or express JWT

export function* loginRequest() {
	yield takeEvery('LOGIN_REQUEST', function* (data) {

		try{

			const user = yield axios.post(`${uri}/api/v1/user/sign_in`, {
				email: data.user.email,
				password: data.user.password,
			}, { withCredentials: true });

			delete user.data.user.password;

			sessionStorage.setItem('usr', JSON.stringify(user.data.user));

			yield put({
				type: actions.LOGIN_SUCCESS,
				token: user.data.token,
				user_data: user.data.user,
				loading:true,
			});

		} catch (err){

			clearToken();

			yield put({type: actions.LOGIN_ERROR});

		}
	});
}

export function* loginSuccess() {
	yield takeEvery(actions.LOGIN_SUCCESS, function* (payload) {
		yield localStorage.setItem('id_token', payload.token);
	});
}

// export function* loginError() {
// 	yield takeEvery(actions.LOGIN_ERROR, function* () { 

// 		// clearing token just in case
// 		clearToken();
// 		yield put({
// 			type: actions.LOGIN_ERROR,
// 			login_error: false,
// 		});

// 	});
// }

export function* logout() {
	yield takeEvery(actions.LOGOUT, function* () {
		clearToken();
		// yield put(push('/'));
	});
}
export function* checkAuthorization() {
	yield takeEvery(actions.CHECK_AUTHORIZATION, function* () {
		const token = getToken().get('idToken');
		if (token) {
			yield put({
				type: actions.LOGIN_SUCCESS,
				token,
				profile: 'Profile'
			});
		}
	});
}
export default function* rootSaga() {
	yield all([
		fork(checkAuthorization),
		fork(loginRequest),
		fork(loginSuccess),
		fork(logout)
	]);
}

const actions = {
	CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
	LOGIN_REQUEST: 'LOGIN_REQUEST',
	LOGOUT: 'LOGOUT',
	LOGIN_SUCCESS: 'LOGIN_SUCCESS',
	LOGIN_ERROR: 'LOGIN_ERROR',
	LOADING: 'LOADING',
	
	checkAuthorization: () => ({ type: actions.CHECK_AUTHORIZATION }),
	login: (user) => ({type: actions.LOGIN_REQUEST, user}),
	logout: () => ({type: actions.LOGOUT}),
	setLoading: (status) => {

		return (dispatch) => {

			dispatch({
				type: actions.LOADING,
				loading: status,
			});

		};

	}
};
export default actions;

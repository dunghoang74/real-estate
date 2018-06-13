import actions from "./actions";

const initState = {
	idToken: null,
	user_data: null,
	loading: null,
};

export default function authReducer(state = initState, action) {
	switch (action.type) {
		case actions.LOGIN_SUCCESS:
			return {
				idToken: action.token,
				user_data: action.user_data,
				loading: action.loading
			};
		case actions.LOGOUT:
			return initState;
		case actions.LOGIN_ERROR:
			return {
				idToken: null,
				user_data: null,
				loading: true,
			};
		case actions.LOADING:
			return {
				loading: action.loading
			};
		default:
			return state;
	}
}

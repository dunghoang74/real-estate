import actions from './actions';

const initState = {
    userRegistered: false,
    userAvailable: true,
    userEmailAvailable: true,
    user_exist: false,
};

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case actions.REGISTER_USER:
            return {
                ...state,
                userRegistered: action.userAdded,
            };
        case actions.LOGGED_IN_USER:
            return {
                ...state,
                userLoggedIn : action.loggedInUser,
            };
        case actions.LOGGED_OUT_USER:
            return {
                ...state,
                userRegistered: false,
                userLoggedIn : false,
            };
        case actions.CHECK_LOGIN_STATUS:
            return {
                ...state,
                userLoggedIn : action.loggedInUser,
            };
        case actions.CHECK_USER_AVALABITY:
            return {
                ...state,
                userAvailable : action.userAvailable,
            };
        case actions.CHECK_USER_EMAIL_AVALABITY:
            return {
                ...state,
                userEmailAvailable : action.userEmailAvailable,
            };
        case actions.CHECK_USER_EXIST:
            return {
                ...state,
                user_exist : action.user_exist,
            };
        default:
            return state;
    }
}
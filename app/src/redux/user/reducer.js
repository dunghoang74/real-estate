import actions from './actions';

const initState = {
    userRegistered: false,
    userLoggedIn: false,
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
        default:
            return state;
    }
}
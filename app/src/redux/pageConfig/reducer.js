import actions from './actions';

const initState = {
    user_page: null,
    images:null,
    loading_logo:'plus',
    loading_header:'plus',
    token_expired: null,
    color_saved:null,
    is_user:null,
};

export default function PageConfigReducer(state = initState, action) {
    switch (action.type) {
        case actions.SETUP_PAGE_CONFIG:
            return {
                ...state,
                user_page: action.user_page,
            };
        case actions.LOADING:
            return {
                ...state,
                loading_logo: action.loading_logo,
                loading_header: action.loading_header,
            };
        case actions.TOKEN_EXPIRED:
            return {
                ...state,
                token_expired: action.token_expired,
            };
        case actions.SAVED_COLORS:
            return {
                ...state,
                color_saved: action.color_saved,
            };
        case actions.PAGE_CONFIG:
            return {
                ...state,
                user_page: action.user_page,
            };
        case actions.IS_USER:
            return {
                ...state,
                is_user: action.is_user,
            };
        default:
            return state;
    }
}
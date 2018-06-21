import actions from './actions';

const initState = {
    user_page: null,
    images:null,
    loading_logo:'plus',
    loading_header:'plus',
    token_expired: null,
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
        default:
            return state;
    }
}
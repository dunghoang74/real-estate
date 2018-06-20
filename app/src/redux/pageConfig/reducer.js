import actions from './actions';

const initState = {
    user_page: null,
    images:null,
    loading:'plus',
};

export default function PageConfigReducer(state = initState, action) {
    switch (action.type) {
        case actions.SETUP_PAGE_CONFIG:
            return {
                ...state,
                user_page: action.user_page,
            };
        case actions.GET_USER_IMAGES:
            return {
                ...state,
                images: action.images,
            };
        case actions.LOADING:
            return {
                ...state,
                loading: action.loading,
            };
        default:
            return state;
    }
}
import actions from './actions';

const initState = {
    user_page: null,
};

export default function PageConfigReducer(state = initState, action) {
    switch (action.type) {
        case actions.SETUP_PAGE_CONFIG:
            return {
                ...state,
                user_page: action.user_page,
            };
        default:
            return state;
    }
}
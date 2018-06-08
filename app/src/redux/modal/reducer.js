import actions from './actions';

const initState = {
    showStatus: null,
};

export default function modalReducer(state = initState, action) {
    switch (action.type) {
        case actions.UPDATE_STATUS:
            return {
                ...state,
                showStatus: action.showModal,
            };
        default:
            return state;
    }
}
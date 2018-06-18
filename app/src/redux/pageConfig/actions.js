const pageActions = {
    SETUP_PAGE_CONFIG: 'SETUP_PAGE_CONFIG',
    
    setupPage: (page) => {

        return (dispatch) => {

            sessionStorage.setItem('u_p', page.data);

            dispatch({
                type: pageActions.SETUP_PAGE_CONFIG,
                user_page: page.data,
            });

        }
    },

};
export default pageActions;


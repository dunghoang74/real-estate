const pageActions = {
    SETUP_PAGE_CONFIG: 'SETUP_PAGE_CONFIG',
    
    setupPage: (page) => {

        
        return (dispatch) => {

            
            sessionStorage.setItem('u_p', JSON.stringify(page.data));
            console.log(sessionStorage.getItem('usr'))
            
            
            dispatch({
                type: pageActions.SETUP_PAGE_CONFIG,
                user_page: page.data,
            });
            

        }
    },

};
export default pageActions;


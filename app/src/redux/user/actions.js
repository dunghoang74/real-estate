import axios from 'axios';
import config from '../../config';
import authAction from "../../redux/auth/actions";

const uri = config.end_point_uri;
const { login } = authAction;

const userActions = {
    REGISTER_USER: 'REGISTER_USER',
    LOGGED_IN_USER: 'LOGGED_IN_USER',
    LOGGED_OUT_USER: 'LOGGED_OUT_USER',
    CHECK_LOGIN_STATUS: 'CHECK_LOGIN_STATUS',
    CHECK_USER_AVALABITY: 'CHECK_USER_AVALABITY',
    CHECK_USER_EMAIL_AVALABITY: 'CHECK_USER_EMAIL_AVALABITY',

    addUser: (user) => {
        const newUser = axios.post(`${uri}/api/user`, {
        
            username:  user.username,
            email:     user.email,
            password:  user.password,
            user_type: user.user_type,
            
        },{withCredentials: true})

        return (dispatch) => {
            newUser
            .then(({data}) => {

                // delete the hashed password from the api response
                delete data.user.password;
                // set the session storage with the user data sent by the API
                sessionStorage.setItem('usr', JSON.stringify(data.user));

                // make sure the token was created from the api
                // if is not empty then the user will be taken as isLoggenIn
                if(data.token){
                    localStorage.setItem('id_token', data.token);

                    dispatch({
                        type: userActions.LOGGED_IN_USER,
                        loggedInUser: true,
                    });

                    // it will trigger the welcome modal
                    dispatch({
                        type: userActions.REGISTER_USER,
                        userAdded: true,
                    });

                }

                // it closes the modal
                dispatch({
                    type: 'UPDATE_STATUS',
                    showModal: false,
                });
                
            })
            .catch(err => {
                //dispatch({type: ERROR_GETTING_LEADS, payload: err});
            });
            
        };
    },
    loggOutUser: () =>{
        return (dispatch) => {

            dispatch({
                type: userActions.LOGGED_IN_USER,
                loggedInUser: false,

            });

            localStorage.removeItem('id_token');
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_at');
            sessionStorage.clear();
            
        };
    },
    checkLoginStatus: () =>{
        let status = (localStorage.getItem('id_token') !== null) ? true : false;

        return (dispatch) => {

            dispatch({
                type: userActions.CHECK_LOGIN_STATUS,
                loggedInUser: status,
            });
            
        };
    },
    checkUserAvalability: (username) =>{
        const User = axios.get(`${uri}/api/user/check_avalability/${username}`);
        let userAvailable = true;

        return (dispatch) => {
            User
                .then(({ data }) => {

                    if (data !== null) {
                        userAvailable = false;
                    }

                    dispatch({
                        type: userActions.CHECK_USER_AVALABITY,
                        userAvailable: userAvailable,
                    });

                })
                .catch(err => {
                    //dispatch({type: ERROR_GETTING_LEADS, payload: err});
                });

            
         };
    },
    checkUserEmailAvalability: (email) =>{
        const User = axios.get(`${uri}/api/user/check_email_avalability/${email}`);
        let userEmailAvailable = true;

        return (dispatch) => {
            User
                .then(({ data }) => {

                    if (data !== null) {
                        userEmailAvailable = false;
                    }

                    dispatch({
                        type: userActions.CHECK_USER_EMAIL_AVALABITY,
                        userEmailAvailable: userEmailAvailable,
                    });

                })
                .catch(err => {
                    //dispatch({type: ERROR_GETTING_LEADS, payload: err});
                });

            
         };
    },

};
export default userActions;


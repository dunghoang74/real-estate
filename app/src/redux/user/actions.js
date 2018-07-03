import axios from 'axios';
import config from '../../config';
import authAction from "../../redux/auth/actions";
import {getUsernameFromUrl} from "../../helpers/utility";
import Notification from '../../components/notification';

const uri = config.end_point_uri;

const userActions = {
    REGISTER_USER: 'REGISTER_USER',
    LOGGED_IN_USER: 'LOGGED_IN_USER',
    LOGGED_OUT_USER: 'LOGGED_OUT_USER',
    CHECK_LOGIN_STATUS: 'CHECK_LOGIN_STATUS',
    CHECK_USER_AVALABITY: 'CHECK_USER_AVALABITY',
    CHECK_USER_EMAIL_AVALABITY: 'CHECK_USER_EMAIL_AVALABITY',
    CHECK_USER_EXIST : 'CHECK_USER_EXIST',

    addUser: (user) => {
        const newUser = axios.post(`${uri}/api/v1/user`, {
        
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
    checkLoginStatus: () => {

        return (dispatch) => {

            if(localStorage.getItem('id_token') !== null){

                let config = {
                        headers: { 
                            'Authorization': localStorage.getItem('id_token')
                        },withCredentials: true
                    };
                
                axios.post(`${uri}/api/v1/user/validate_token`, null, config)
                    .then((resp) => {

                        console.log("---VALID token---", resp);
                        dispatch({
                            type: userActions.CHECK_LOGIN_STATUS,
                            loggedInUser: true,
                        });
                        
                    })
                    .catch((err) => {
                        
                        console.log("----INVALID TOKEN---", err.response);

                        if(err.response !== undefined && (err.response.status === 499 || err.response.status === 403)){
                            // redirect to signin page
                            localStorage.removeItem('id_token');
                            localStorage.removeItem('access_token');
                            localStorage.removeItem('expires_at');
                            // sessionStorage.clear();

                            Notification(
                                'error',
                                "Su session ha terminado. Porfavor Ingrese nuevamente.",
                            );

                            setTimeout(() =>{
                                window.location =  "/" + getUsernameFromUrl();
                            },500)
                            
                            dispatch({
                                type: userActions.CHECK_LOGIN_STATUS,
                                loggedInUser: false,
                            });
                        }
                    }
                );

            }
        };

        
    },
    
    checkUserAvalability: (username) =>{
        const User = axios.get(`${uri}/api/v1/user/check_avalability/${username}`);
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
        const User = axios.get(`${uri}/api/v1/user/check_email_avalability/${email}`);
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


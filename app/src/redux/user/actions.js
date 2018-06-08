import axios from 'axios';
import { connect } from 'react-redux';
import Notification from '../../components/notification';
import config from '../../config';

const uri = config.end_point_uri;

const userActions = {
    REGISTER_USER: 'REGISTER_USER',
    LOGGED_IN_USER: 'LOGGED_IN_USER',
    LOGGED_OUT_USER: 'LOGGED_OUT_USER',

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
                sessionStorage.setItem('user_signed_up', JSON.stringify(data.user));

                // make sure the token was created from the api
                // if is not empty then the user will be taken as isLoggenIn
                if(data.token){
                    localStorage.setItem('id_token', data.token);
                    
                    // close the registration modal

                    Notification(
                        'success',
                        'Welcome ' + data.user.username,
                        //JSON.stringify(values)
                    );

                    dispatch({
                        type: userActions.LOGGED_IN_USER,
                        loggedInUser: true,
                    });

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

            localStorage.removeItem('id_token');
            localStorage.removeItem('access_token');
            localStorage.removeItem('expires_at');
            sessionStorage.clear();

            dispatch({
                type: 'LOGGED_OUT_USER'
            });
        };
    },

};
export default userActions;


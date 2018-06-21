import axios from 'axios';
import config from '../../../src/config';
import {getUsernameFromUrl} from '../../../src/helpers/utility';
import { Redirect } from "react-router-dom";


const uri = config.end_point_uri;
const defaultVal = 'plus';

const pageActions = {
    SETUP_PAGE_CONFIG: 'SETUP_PAGE_CONFIG',
    UPLOAD_LOGO: 'UPLOAD_LOGO',
    LOADING: 'LOADING',
    TOKEN_EXPIRED: 'TOKEN_EXPIRED',

    setupPage: (page) => {
        return (dispatch) => {
            sessionStorage.setItem('u_p', JSON.stringify(page));
            dispatch({
                type: pageActions.SETUP_PAGE_CONFIG,
                user_page: page,
            });
        }
    },

    getPageInfo:(userId) => {
        const pageInfo = axios.get(`${uri}/api/page/${userId}`);
        
        return (dispatch) => {
            pageInfo
            .then(({data}) => {
                
                sessionStorage.setItem('u_p', JSON.stringify(data[0]));

                dispatch({
                    type: pageActions.SETUP_PAGE_CONFIG,
                    user_page: data[0],
                });

                console.log('getpageuserinfo:::', data[0]);
                    
            })
            .catch(err => {
                //dispatch({type: ERROR_GETTING_LEADS, payload: err});
            });

        }
    },

    uploadLogo:(file) => {
    
        let config = {
                headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem('id_token')
                        },
                withCredentials: true
        };

        const upload = axios.post(`${uri}/api/page/upload-logo`, file, config )
        
        return (dispatch) => {

            dispatch({
                type: pageActions.LOADING,
                loading_logo: 'loading',

                loading_header: defaultVal,
            });

            upload
            .then((resp) => {

                sessionStorage.setItem('u_p', JSON.stringify(resp.data));

                dispatch({
                    type: pageActions.SETUP_PAGE_CONFIG,
                    user_page: resp.data,
                });
                dispatch({
                    type: pageActions.LOADING,
                    loading_logo: 'plus',

                    loading_header: defaultVal,
                });

            })
            .catch(err => {
                if(err.response !== undefined && (err.response.status === 403 || err.response.status === 499)){
                    
                    dispatch({
                        type: pageActions.TOKEN_EXPIRED,
                        token_expired: true,
                    });                    

                }else{

                    console.log('errororor::::', err.response)
                    // message.error('Hubo un error al subir el logo. Refresque la página e intente denuevo.');
                    // dispatch({type: ERROR_UPLOAD, upload_error: err});

                }

                

            });

        }
    },

    uploadHeader:(file) => {
        let config = {
                headers: { 
                            'Content-Type': 'application/json',
                            'Authorization': localStorage.getItem('id_token')
                        },
                withCredentials: true
        };

        const upload = axios.post(`${uri}/api/page/upload-header`, file, config )
        
        return (dispatch) => {

            dispatch({
                type: pageActions.LOADING,
                loading_header: 'loading',

                loading_logo: defaultVal,
            });

            upload
            .then((resp) => {

                sessionStorage.setItem('u_p', JSON.stringify(resp.data));

                dispatch({
                    type: pageActions.SETUP_PAGE_CONFIG,
                    user_page: resp.data,
                });

                dispatch({
                    type: pageActions.LOADING,
                    loading_header: 'plus',

                    loading_logo: defaultVal,
                });

            })
            .catch(err => {
                console.log('error header image:::',err)
                //dispatch({type: ERROR_GETTING_LEADS, payload: err});

            });

        }
    },

    loading:(status, section) => {
        return (dispatch) => {

            if(section === 'logo'){
                dispatch({
                    type: pageActions.LOADING,
                    loading_logo: status,

                    loading_header: defaultVal,
                });
            }

            if(section === 'header'){
                dispatch({
                    type: pageActions.LOADING,
                    loading_header: status,

                    loading_logo: defaultVal,
                });
            }
        }
            
    },

};

export default pageActions;


import axios from 'axios';
import config from '../../../src/config';
const uri = config.end_point_uri;

const pageActions = {
    SETUP_PAGE_CONFIG: 'SETUP_PAGE_CONFIG',
    GET_USER_IMAGES: 'GET_USER_IMAGES',
    UPLOAD_LOGO: 'UPLOAD_LOGO',
    LOADING: 'LOADING',

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
    getImages:() => {        
        return (dispatch) => {

            const importAll = (r) => {
                let images = {};
                r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
                return images;
            }

            const images = importAll(require.context('../../image/logos/', false, /\.(png|jpe?g)$/));
            dispatch({
                type: pageActions.GET_USER_IMAGES,
                images: images,
            });
        }
    },
    uploadLogo:(file) => {
        let data = new FormData();
	
	    data.append('logoPage', file); //logoPage is configured at the router

        let config = {
                headers: { 
                            'Content-Type': 'multipart/form-data',
                            'Authorization': localStorage.getItem('id_token')
                        },
                withCredentials: true
        };

        const upload = axios.post(`${uri}/api/page/upload-logo`, data, config)
            
        return (dispatch) => {

            dispatch({
                type: pageActions.LOADING,
                loading: 'loading',
            });

            upload
            .then(({resp}) => {
                
                sessionStorage.setItem('u_p', JSON.stringify(resp.data));

                dispatch({
                    type: pageActions.SETUP_PAGE_CONFIG,
                    user_page: resp.data,
                });
                dispatch({
                    type: pageActions.LOADING,
                    loading: 'plus',
                });

            })
            .catch(err => {

                //dispatch({type: ERROR_GETTING_LEADS, payload: err});

            });

        }
    },
    loading:(status) => {
        console.log('statusloading:::', status)
        return (dispatch) => {
            dispatch({
                    type: pageActions.LOADING,
                    loading: status,
                });
            }
    },

};
export default pageActions;


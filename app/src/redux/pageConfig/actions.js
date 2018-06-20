import axios from 'axios';
import config from '../../../src/config';
const uri = config.end_point_uri;

const pageActions = {
    SETUP_PAGE_CONFIG: 'SETUP_PAGE_CONFIG',
    GET_USER_IMAGES: 'GET_USER_IMAGES',

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
                
                console.log(data[0])
                dispatch({
                    type: pageActions.SETUP_PAGE_CONFIG,
                    user_page: data[0],
                });
                    
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

};
export default pageActions;


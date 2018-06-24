import { store } from './store';
import authActions from './auth/actions';
import pageActions from './pageConfig/actions';

export default () =>
  new Promise(() => {
    store.dispatch(authActions.checkAuthorization());
    store.dispatch(pageActions.bootPageConfig());
  });

import asyncComponent from '../helpers/AsyncFunc';

const routes = [
  {
    path: 'githubSearch',
    component: asyncComponent(() => import('./containers/GithubSearch'))
  },
  {
    path: 'page-config',
    component: asyncComponent(() => import('./containers/page-config'))
  }
];
export default routes;

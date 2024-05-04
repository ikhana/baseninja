import HomeComponent from './Home';

import { appConfig } from '../../config/appConfig';

export const paths = {
  home: {
    to: '/',
    title: appConfig.home.tabTitle,
  },
};

const routes = [
  {
    title: paths.home.title,
    path: paths.home.to,
    exact: true,
    component: HomeComponent,
  },
];

export default routes;

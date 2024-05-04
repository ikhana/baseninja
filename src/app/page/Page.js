import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import _find from 'lodash/find';

import Box from '@mui/material/Box';

import routes from '../../routes';

import { appConfig } from '../../config/appConfig';

const Page = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const matchedRoute = _find(routes, route => route.path === pathname);

    global.document.title = matchedRoute ? matchedRoute.title : appConfig.tabTitle;
  }, [pathname]);

  return (
    <Box 
      id="home"
      component="main"
    >
      {children}
    </Box>
  );
};

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;

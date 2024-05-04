import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import _map from 'lodash/map';

import CssBaseline from '@mui/material/CssBaseline';

import Page from './page/Page';
import Theme from '../styles/Theme';

import store from '../store/config';

const renderRoutes = appRoutes =>
  _map(appRoutes, (route, idx) => {
    const { path, to, exact, component: Component } = route;

    let element;

    if (Component) {
      element = <Route key={`route${idx}`} path={path} exact={exact} element={<Component />} />;
    } else if (to) {
      element = <Route key={`route${idx}`} path={path} element={<Navigate to={to} replace />} />;
    }

    return element;
  });

const App = ({ routes }) => {
  return (
    <Provider store={store}>
      <Router>
        <Theme>
          <CssBaseline />
          <Page>
            <Routes>{renderRoutes(routes)}</Routes>
          </Page>
        </Theme>
      </Router>
    </Provider>
  );
};

App.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default App;

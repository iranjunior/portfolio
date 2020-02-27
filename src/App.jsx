import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createBrowserHistory } from 'history';
import Home from './pages/home';

import GlobalStyles from './styles/globalStyles';
import light from './styles/themes/light';

const history = createBrowserHistory();

const App = () => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <Router history={history}>
      <Switch>
        <Route
          path="/"
          component={Home}
        />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;

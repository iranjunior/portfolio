import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';

import GlobalStyles from './styles/globalStyles';
import light from './styles/themes/light';

const App = () => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
);

export default App;

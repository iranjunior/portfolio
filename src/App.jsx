import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home';

import GlobalStyles from './styles/globalStyles';
import light from './styles/themes/light';

const App = () => (
  <ThemeProvider theme={light}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);

export default App;

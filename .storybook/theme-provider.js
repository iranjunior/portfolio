
import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from '../src/styles/globalStyles';
const ThemeProvider = ({ theme, children }) => {
  const nextTheme = Object.assign({}, theme);

  return (
      <StyledThemeProvider theme={nextTheme}>
        <GlobalStyles />
       {children}
      </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  theme: PropTypes.object.isRequired
};

export default ThemeProvider

import React from "react";
import PropTypes from "prop-types";

import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeProvider = ({ theme, children }) => {
  const nextTheme = Object.assign({}, theme);

  return (
      <StyledThemeProvider theme={nextTheme}>
       {children}
      </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  theme: PropTypes.object.isRequired
};

export default ThemeProvider
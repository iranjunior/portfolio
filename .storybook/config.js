
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import ThemeProvider from './theme-provider';
import customViewPorts from './view-ports';

import LightTheme from '../src/styles/themes/light';
import DarkTheme from '../src/styles/themes/dark';

const themes = [LightTheme, DarkTheme];
addDecorator(withThemesProvider(themes, ThemeProvider));
addParameters({
    viewport: {
      viewports: customViewPorts,
      defaultViewport: 'desktop',
    },
  });

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
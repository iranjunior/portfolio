import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import light from '../../../styles/themes/light';
import Home from '../index';


jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Router: ({ children }) => <div>{children}</div>,
  Route: ({ children }) => <div>{children}</div>,
  Switch: ({ children }) => <div>{children}</div>,

}));


const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Home Page', () => {
  it('Should render Home with success', () => {
    const wrapper = render(decorator(<Home />));

    expect(wrapper.getAllByText('Iran Junior')).toBeDefined();
  });
});

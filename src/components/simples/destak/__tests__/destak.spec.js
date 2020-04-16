import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';
import Destak from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Destak ', () => {
  it('Should render Destak with success', () => {
    const string = 'Test';
    const wrapper = render(
      decorator(<Destak message={string} />),
    );

    expect(wrapper.container.textContent).toBe(string);
  });
});

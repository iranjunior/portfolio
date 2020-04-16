import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import Menu from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Menus', () => {
  it('Should render Menu with success', () => {
    const wrapper = render(
      decorator(<Menu />),
    );

    expect(wrapper.getByText('Iran Junior')).toBeDefined();
  });
});

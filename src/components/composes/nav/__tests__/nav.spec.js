import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import Nav from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Navs', () => {
  it('Should render Nav with success', () => {
    const wrapper = render(
      decorator(<Nav />),
    );

    expect(wrapper.getByText('Iran Junior')).toBeDefined();
  });
});

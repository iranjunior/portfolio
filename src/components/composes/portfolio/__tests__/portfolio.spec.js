import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import portfolios from '../../../../constants/portfolio';

import Portfolio from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Portfolios', () => {
  it('Should render Portfolio with success', () => {
    const wrapper = render(
      decorator(<Portfolio />),
    );

    expect(wrapper.getByText('Aqui está meu')).toBeDefined();
    expect(wrapper.getByText('Portfolio')).toBeDefined();
    expect(wrapper.getByText(portfolios[0].name)).toBeDefined();
    expect(wrapper.getByText(portfolios[0].description)).toBeDefined();
  });
});

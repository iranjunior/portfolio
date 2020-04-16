import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import Title from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Title ', () => {
  it('Should render Title with success', () => {
    const string = 'Teste';
    const wrapper = render(
      decorator(<Title message={string} />),
    );

    expect(wrapper.container.textContent).toBe(string);
  });
});

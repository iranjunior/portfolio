import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import NotFound from '../notfound';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test NotFound ', () => {
  it('Should render NotFound with success', () => {
    const wrapper = render(
      decorator(<NotFound />),
    );

    expect(wrapper.container.textContent).toBe('Pagina não encontrada');
  });
});

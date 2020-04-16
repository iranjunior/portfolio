import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import Introduction from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Introduction ', () => {
  it('Should render Introduction with success', () => {
    const string = 'Teste';
    const wrapper = render(
      decorator(<Introduction message={string} />),
    );

    expect(wrapper.container.textContent).toBe(string);
  });
});

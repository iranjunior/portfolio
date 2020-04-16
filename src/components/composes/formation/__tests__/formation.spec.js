import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';
import formations from '../../../../constants/formations';
import Formation from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Formations', () => {
  it('Should render Formation with success', () => {
    const wrapper = render(
      decorator(<Formation />),
    );

    expect(wrapper.getByText('Essas são as minhas')).toBeDefined();
    expect(wrapper.getByText('Formações')).toBeDefined();
    expect(wrapper.getByText(formations[0].name)).toBeDefined();
    expect(wrapper.getByText(formations[0].description)).toBeDefined();
  });
});

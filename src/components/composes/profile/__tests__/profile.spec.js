import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import informations from '../../../../constants/informations';
import icons from '../../../../constants/icons';

import Profile from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Profiles', () => {
  it('Should render Profile with success', () => {
    const wrapper = render(
      decorator(<Profile />),
    );

    expect(wrapper.getByAltText('foto do iran')).toBeDefined();
    expect(wrapper.getByText('Informações Gerais')).toBeDefined();
    expect(wrapper.getByText(informations[0].information)).toBeDefined();
    expect(wrapper.getAllByRole('button').length).toBe(icons.length);
  });
});

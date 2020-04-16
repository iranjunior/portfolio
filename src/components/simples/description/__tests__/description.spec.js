import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';
import descriptions from '../../../../constants/descriptions';
import Description from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Description ', () => {
  it('Should render Description with success', () => {
    const wrapper = render(
      decorator(<Description type="skills" />),
    );

    expect(wrapper.container.textContent).toBe(descriptions.skills);
  });
});

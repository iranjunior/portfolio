import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';
import strengths from '../../../../constants/strengths';
import About from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Abouts', () => {
  it('Should render About with success', () => {
    const wrapper = render(
      decorator(<About />),
    );

    expect(wrapper.getByText('Oi, eu sou o')).toBeDefined();
    expect(wrapper.getByText('Iran Junior')).toBeDefined();
    expect(wrapper.getByText('Descrição')).toBeDefined();
    expect(wrapper.container.firstChild.childNodes[5].firstChild.firstChild.firstChild.data)
      .toBe(strengths[0].title);
    expect(wrapper.container.firstChild.childNodes[5].firstChild.lastChild.firstChild.data)
      .toBe(strengths[0].description);
  });
});

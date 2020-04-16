import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import strengths from '../../../../constants/strengths';

import Strengths from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Strengths', () => {
  it('Should render Strengths with success', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirect = jest.fn(() => {});

    const wrapper = render(
      decorator(<Strengths
        strengths={strengths}
        redirect={redirect}
        keyPressAction={keyPressActionMock}
      />),
    );

    expect(wrapper.container.firstChild.firstChild.firstChild.data)
      .toBe(strengths[0].title);
    expect(wrapper.container.firstChild.lastChild.firstChild.data)
      .toBe(strengths[0].description);
  });
});

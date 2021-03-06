import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import routes from '../../../../routes';

import ListNav from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test ListNav', () => {
  it('Should render ListNav with success', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});
    const isMyRouteMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<ListNav
        routes={routes}
        redirect={redirectMock}
        isMyRoute={isMyRouteMock}
        keyPressAction={keyPressActionMock}
      />),
    );
    expect(wrapper.container.firstChild.childNodes[0].innerHTML).toBe(routes[0].nav);
  });
  it('Should render ListNav with success and click to link', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});
    const isMyRouteMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<ListNav
        routes={routes}
        redirect={redirectMock}
        isMyRoute={isMyRouteMock}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.click(wrapper.container.firstChild.childNodes[0]);

    expect(redirectMock).toHaveBeenCalled();
    expect(redirectMock.mock.calls[0][0]).toBe(routes[0].path);
  });
  it('Should render ListNav with success and click to link by keypress', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});
    const isMyRouteMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<ListNav
        routes={routes}
        redirect={redirectMock}
        isMyRoute={isMyRouteMock}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.keyPress(wrapper.container.firstChild.childNodes[0], { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressActionMock).toHaveBeenCalled();
    expect(keyPressActionMock.mock.calls[0][1]).toBe(redirectMock);
  });
});

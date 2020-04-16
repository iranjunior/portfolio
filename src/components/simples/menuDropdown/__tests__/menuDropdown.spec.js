import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import routes from '../../../../routes';

import MenuDropdown from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test MenuDropdown', () => {
  it('Should render MenuDropdown with success', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});
    const isMyRouteMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<MenuDropdown
        routes={routes}
        redirect={redirectMock}
        isMyRoute={isMyRouteMock}
        keyPressAction={keyPressActionMock}
      />),
    );
    expect(wrapper.container.firstChild.childNodes[0].firstChild.innerHTML).toBe(routes[0].nav);
  });

  it('Should render MenuDropdown with success and click to link', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});
    const isMyRouteMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<MenuDropdown
        routes={routes}
        redirect={redirectMock}
        isMyRoute={isMyRouteMock}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.click(wrapper.container.firstChild.childNodes[0].firstChild);

    expect(redirectMock).toHaveBeenCalled();
    expect(redirectMock.mock.calls[0][0]).toBe(routes[0].path);
  });
  it('Should render MenuDropdown with success and click to link by keypress', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});
    const isMyRouteMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<MenuDropdown
        routes={routes}
        redirect={redirectMock}
        isMyRoute={isMyRouteMock}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.keyPress(wrapper.container.firstChild.childNodes[0].firstChild, { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressActionMock).toHaveBeenCalled();
    expect(keyPressActionMock.mock.calls[0][1]).toBe(redirectMock);
  });
});

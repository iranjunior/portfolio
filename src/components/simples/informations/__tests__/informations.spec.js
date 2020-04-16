import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import informations from '../../../../constants/informations';

import Information from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Information', () => {
  it('Should render Information with success', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirect = jest.fn(() => {});

    const wrapper = render(
      decorator(<Information
        informations={informations}
        redirect={redirect}
        keyPressAction={keyPressActionMock}
      />),
    );

    expect(wrapper.container.firstChild.childNodes[1].childNodes[1].data)
      .toContain(informations[0].label);
    expect(wrapper.container.firstChild.childNodes[1].lastChild.innerHTML)
      .toBe(informations[0].information);
  });
  it('Should render Information with success and click to link', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirect = jest.fn(() => {});

    const wrapper = render(
      decorator(<Information
        informations={informations}
        redirect={redirect}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.click(wrapper.container.firstChild.childNodes[4].lastChild);

    expect(redirect).toHaveBeenCalled();
  });

  it('Should render Information with success and click to link by keypress', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirect = jest.fn(() => {});

    const wrapper = render(
      decorator(<Information
        informations={informations}
        redirect={redirect}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.keyPress(wrapper.container.firstChild.childNodes[4].lastChild, { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressActionMock).toHaveBeenCalled();
    expect(keyPressActionMock.mock.calls[0][1]).toBe(redirect);
    expect(keyPressActionMock.mock.calls[0][2]).toBe(informations[3].link.type);
  });
});

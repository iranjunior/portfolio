import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import informations from '../../../../constants/informations';

import Information from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Information', () => {
  it('Should render Personal Information with success', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirect = jest.fn(() => {});

    const wrapper = render(
      decorator(<Information informations={informations} redirect={redirect} keyPressAction={keyPressActionMock} />),
    );

    expect(wrapper.container.firstChild.childNodes[1].childNodes[1].data).toContain(informations[0].label);
    expect(wrapper.container.firstChild.childNodes[1].lastChild.innerHTML).toBe(informations[0].information);
  });
  it.skip('Should render Formation Information with success', () => {
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Information data={data} type="formation" keyPressAction={keyPressActionMock} />),
    );

    expect(wrapper.container.textContent).toContain(data.name);
    expect(wrapper.container.textContent).toContain(data.description);
    expect(wrapper.container.textContent).toContain('Leia mais...');
  });
  it.skip('Should render Formation Information with success and click', () => {
    const keyPressActionMock = jest.fn(() => {});
    const wrapper = render(
      decorator(<Information data={data} type="formation" keyPressAction={keyPressActionMock} />),
    );

    fireEvent.click(wrapper.container.lastChild.lastChild);

    expect(wrapper.container.textContent).toContain(data.name);
    expect(wrapper.container.textContent).toContain(data.description);
    expect(wrapper.container.textContent).toContain('Mostrar menos...');
  });
  it.skip('Should render Formation Information with success complete formation', () => {
    const keyPressActionMock = jest.fn(() => {});
    data.complete = false;
    const wrapper = render(
      decorator(<Information data={data} type="formation" keyPressAction={keyPressActionMock} />),
    );

    fireEvent.click(wrapper.container.lastChild.lastChild);

    expect(wrapper.container.textContent).toContain(data.name);
    expect(wrapper.container.textContent).toContain(data.description);
    expect(wrapper.container.textContent).toContain('Mostrar menos...');
  });
});

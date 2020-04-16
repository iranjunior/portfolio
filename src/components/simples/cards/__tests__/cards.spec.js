import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import data from './payloads/data.json';

import Cards from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Cardss', () => {
  it('Should render Portfolio Cards with success', () => {
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Cards data={data} type="portfolio" keyPressAction={keyPressActionMock} />),
    );

    expect(wrapper.container.textContent).toContain(data.name);
    expect(wrapper.container.textContent).toContain(data.description);
    expect(wrapper.container.textContent).toContain(data.html_url);
  });
  it('Should render Formation Cards with success', () => {
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Cards data={data} type="formation" keyPressAction={keyPressActionMock} />),
    );

    expect(wrapper.container.textContent).toContain(data.name);
    expect(wrapper.container.textContent).toContain(data.description);
    expect(wrapper.container.textContent).toContain('Leia mais...');
  });
  it('Should render Formation Cards with success and click', () => {
    const keyPressActionMock = jest.fn(() => {});
    const wrapper = render(
      decorator(<Cards data={data} type="formation" keyPressAction={keyPressActionMock} />),
    );

    fireEvent.click(wrapper.container.lastChild.lastChild);

    expect(wrapper.container.textContent).toContain(data.name);
    expect(wrapper.container.textContent).toContain(data.description);
    expect(wrapper.container.textContent).toContain('Mostrar menos...');
  });
  it('Should render Formation Cards with success complete formation', () => {
    const keyPressActionMock = jest.fn(() => {});
    data.complete = false;
    const wrapper = render(
      decorator(<Cards data={data} type="formation" keyPressAction={keyPressActionMock} />),
    );

    fireEvent.click(wrapper.container.lastChild.lastChild);

    expect(wrapper.container.textContent).toContain(data.name);
    expect(wrapper.container.textContent).toContain(data.description);
    expect(wrapper.container.textContent).toContain('Mostrar menos...');
  });

  it('Should render Formation Cards with success show complete by keypress formation', () => {
    const keyPressActionMock = jest.fn(() => {});
    data.complete = false;
    const wrapper = render(
      decorator(<Cards data={data} type="formation" keyPressAction={keyPressActionMock} />),
    );

    fireEvent.keyPress(wrapper.container.lastChild.lastChild, { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressActionMock).toHaveBeenCalled();
  });
});

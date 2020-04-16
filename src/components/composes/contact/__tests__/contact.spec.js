import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import light from '../../../../styles/themes/light';

import Contact from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Contacts', () => {
  it('Should render Contact with success', () => {
    const wrapper = render(
      decorator(<Contact />),
    );

    expect(wrapper.getByText('Me mande uma')).toBeDefined();
    expect(wrapper.getByText('Mensagem')).toBeDefined();
  });

  it('Should render Contact with success and typing name, email and message', () => {
    const string = 'teste';
    const wrapper = render(
      decorator(<Contact />),
    );

    userEvent.type(wrapper.getByTestId('name'), string);
    userEvent.type(wrapper.getByTestId('email'), string);
    userEvent.type(wrapper.getByTestId('message'), string);

    expect(wrapper.getByTestId('name').value).toBe(string);
    expect(wrapper.getByTestId('email').value).toBe(string);
    expect(wrapper.getByTestId('message').value).toBe(string);
  });

  it('Should render Contact with success, typing name, email and message and click submit', () => {
    const name = 'teste';
    const email = 'teste@teste.com';
    const message = 'teste teste teste';

    const wrapper = render(
      decorator(<Contact />),
    );

    userEvent.type(wrapper.getByTestId('name'), name);
    userEvent.type(wrapper.getByTestId('email'), email);
    userEvent.type(wrapper.getByTestId('message'), message);

    fireEvent.click(wrapper.container.firstChild.lastChild.lastChild);

    expect(wrapper.getByTestId('name').value).toBe(name);
    expect(wrapper.getByTestId('email').value).toBe(email);
    expect(wrapper.getByTestId('message').value).toBe(message);
    expect(wrapper.container.firstChild.lastChild.lastChild.firstChild.data).toBe('Aguarde...');
  });
});

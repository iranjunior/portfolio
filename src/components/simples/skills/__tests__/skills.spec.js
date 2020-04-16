import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import skills from '../../../../constants/skills';

import Skills from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Skills', () => {
  it('Should render Personal Skills with success', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Skills
        skills={skills}
        redirect={redirectMock}
        keyPressAction={keyPressActionMock}
      />),
    );

    expect(wrapper.container.firstChild.firstChild.data)
      .toBe(skills[0].skill);
  });

  it('Should render Person Skills with success and click to link', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Skills
        skills={skills}
        redirect={redirectMock}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.click(wrapper.container.firstChild);

    expect(redirectMock).toHaveBeenCalled();
    expect(redirectMock.mock.calls[0][0]).toBe(skills[0].link.type);
  });

  it('Should render Person Skills with success and click to link by keypress', () => {
    const keyPressActionMock = jest.fn(() => {});
    const redirectMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Skills
        skills={skills}
        redirect={redirectMock}
        keyPressAction={keyPressActionMock}
      />),
    );

    fireEvent.keyPress(wrapper.container.firstChild, { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressActionMock).toHaveBeenCalled();
    expect(keyPressActionMock.mock.calls[0][1]).toBe(redirectMock);
  });
});

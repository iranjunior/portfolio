import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import light from '../../../../styles/themes/light';

import icons from '../../../../constants/icons';

import Icons from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Icons ', () => {
  it('Should render all Icons with success', () => {
    const redirectMock = jest.fn(() => {});
    const keyPressAction = jest.fn(() => {});

    const wrapper = render(
      decorator(<Icons icons={icons} redirect={redirectMock} keyPressAction={keyPressAction} />),
    );
    expect(wrapper.getAllByRole('button').length).toBe(icons.length);
  });

  it('Should render first Icon with success and clicked', () => {
    const redirectMock = jest.fn(() => {});
    const keyPressAction = jest.fn(() => {});

    render(
      decorator(<Icons icons={icons} redirect={redirectMock} keyPressAction={keyPressAction} />),
    );

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(redirectMock).toHaveBeenCalled();
  });

  it('Should render first Icon with success and clicked by keypress', () => {
    const redirectMock = jest.fn(() => {});
    const keyPressAction = jest.fn(() => {});

    render(
      decorator(<Icons icons={icons} redirect={redirectMock} keyPressAction={keyPressAction} />),
    );

    fireEvent.keyPress(screen.getAllByRole('button')[0], { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressAction).toHaveBeenCalled();
    expect(keyPressAction.mock.calls[0][1]).toBe(redirectMock);
  });
});

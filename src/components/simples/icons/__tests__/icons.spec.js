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
    const redirect = jest.fn(() => {});
    const keyPressAction = jest.fn(() => {});

    const wrapper = render(
      decorator(<Icons icons={icons} redirect={redirect} keyPressAction={keyPressAction} />),
    );
    expect(wrapper.getAllByRole('button').length).toBe(icons.length);
  });

  it('Should render first Icon with success and clicked', () => {
    const redirect = jest.fn(() => {});
    const keyPressAction = jest.fn(() => {});

    render(
      decorator(<Icons icons={icons} redirect={redirect} keyPressAction={keyPressAction} />),
    );

    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(redirect).toHaveBeenCalled();
  });
});

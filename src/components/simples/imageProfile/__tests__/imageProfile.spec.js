import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';
import ImageProfile from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test buttons', () => {
  it('Should render button with success', () => {
    const getCurriculumMock = jest.fn(() => {});
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<ImageProfile getCurriculum={getCurriculumMock} keyPressAction={keyPressActionMock} />),
    );

    expect(wrapper.getByAltText('foto do iran').getAttribute('src')).toBe('profile.jpg');
  });

  it('Shoud clicked in button ImageProfile', () => {
    const getCurriculumMock = jest.fn(() => {});
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<ImageProfile getCurriculum={getCurriculumMock} keyPressAction={keyPressActionMock} />),
    );
    fireEvent.click(wrapper.container.lastChild.firstChild);

    expect(getCurriculumMock).toHaveBeenCalled();
  });
});

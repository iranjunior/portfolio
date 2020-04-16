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
      decorator(<ImageProfile
        getCurriculum={getCurriculumMock}
        keyPressAction={keyPressActionMock}
      />),
    );
    expect(wrapper.getByAltText('foto do iran').getAttribute('src')).toBe('profile.jpg');
  });

  it('Shoud clicked in button ImageProfile', () => {
    const getCurriculumMock = jest.fn(() => {});
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<ImageProfile
        getCurriculum={getCurriculumMock}
        keyPressAction={keyPressActionMock}

      />),
    );
    fireEvent.click(wrapper.container.lastChild.firstChild);

    expect(getCurriculumMock).toHaveBeenCalled();
  });

  it('Shoud clicked in button by keypress ImageProfile', () => {
    const getCurriculumMock = jest.fn(() => {});
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<ImageProfile
        getCurriculum={getCurriculumMock}
        keyPressAction={keyPressActionMock}

      />),
    );

    fireEvent.keyPress(wrapper.container.lastChild.firstChild, { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressActionMock).toHaveBeenCalled();
    expect(keyPressActionMock.mock.calls[0][1]).toBe(getCurriculumMock);
  });
});

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import light from '../../../../styles/themes/light';
import Button from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test buttons', () => {
  it('Should render button with success', () => {
    const getCurriculumMock = jest.fn(() => {});
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Button getCurriculum={getCurriculumMock} keyPressAction={keyPressActionMock} />),
    );

    expect(wrapper.getByRole('button').firstChild.data).toBe('Click aqui para baixar meu curriculo');
  });

  it('Shoud clicked in button', () => {
    const getCurriculumMock = jest.fn(() => {});
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Button getCurriculum={getCurriculumMock} keyPressAction={keyPressActionMock} />),
    );
    fireEvent.click(wrapper.getByRole('button'));

    expect(getCurriculumMock).toHaveBeenCalled();
  });

  it('Shoud type in button and clicked', () => {
    const getCurriculumMock = jest.fn(() => {});
    const keyPressActionMock = jest.fn(() => {});

    const wrapper = render(
      decorator(<Button getCurriculum={getCurriculumMock} keyPressAction={keyPressActionMock} />),
    );

    fireEvent.keyPress(wrapper.getByRole('button'), { key: 'Enter', code: 13, charCode: 13 });

    expect(keyPressActionMock).toHaveBeenCalled();
    expect(keyPressActionMock.mock.calls[0][1]).toBe(getCurriculumMock);
  });
});

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';
import skills from '../../../../constants/skills';
import futureSkills from '../../../../constants/futureSkills';

import Skills from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test Skillss', () => {
  it('Should render Skills with success', () => {
    const wrapper = render(
      decorator(<Skills />),
    );

    expect(wrapper.getByText('Aqui estão as minhas')).toBeDefined();
    expect(wrapper.getByText('Habilidades')).toBeDefined();
    expect(wrapper.container.firstChild.childNodes[3].firstChild.firstChild.data)
      .toBe(skills[0].skill);
    expect(wrapper.container.firstChild.lastChild.firstChild.firstChild.data)
      .toBe(futureSkills[0]);
  });
});

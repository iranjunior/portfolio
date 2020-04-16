import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import light from '../../../../styles/themes/light';

import futureSkills from './payloads/data.json';

import FutureSkill from '../index';

const decorator = (Component) => (<ThemeProvider theme={light}>{Component}</ThemeProvider>);

describe('Test FutureSkill ', () => {
  it('Should render FutureSkill with success', () => {
    const wrapper = render(
      decorator(<FutureSkill futureSkills={futureSkills} />),
    );

    expect(wrapper.container.firstChild.firstChild.textContent).toBe(futureSkills[0]);
    expect(wrapper.container.firstChild.lastChild.textContent).toBe(futureSkills[1]);
  });
});

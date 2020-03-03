import React from 'react';
import { action } from '@storybook/addon-actions';
import FutureSkills from '../components/simples/futureSkills';
import futureSkills from '../components/simples/futureSkills/futureSkills';

export default {
  title: 'FutureSkills',
  decorators: [(storyFn) => <div style={{ margin: '50px' }}>{storyFn()}</div>],
};
const redirect = action('redirect');
export const Default = () => <FutureSkills redirect={redirect} futureSkills={futureSkills} />;

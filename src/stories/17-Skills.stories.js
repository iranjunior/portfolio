import React from 'react';
import { action } from '@storybook/addon-actions';
import Skills from '../components/simples/skills';
import skills from '../constants/skills';

export default {
  title: 'Skills',
  decorators: [(storyFn) => <div style={{ columnCount: 3, margin: '50px' }}>{storyFn()}</div>],
};
const redirect = action('redirect');
export const Default = () => <Skills redirect={redirect} skills={skills} />;

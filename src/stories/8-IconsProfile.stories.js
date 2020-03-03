import React from 'react';
import { action } from '@storybook/addon-actions';
import Icons from '../components/simples/icons';

export default {
  title: 'Icons',
  decorators: [(storyFn) => <div style={{ width: '380px', height: '550px', backgroundColor: '#100F3A' }}>{storyFn()}</div>],
};
const redirect = action('redirect');
export const Default = () => <Icons redirect={redirect} />;

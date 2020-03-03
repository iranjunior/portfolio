import React from 'react';
import { action } from '@storybook/addon-actions';
import ListNav from '../components/simples/listNav';

export default {
  title: 'ListNav',
  decorators: [(storyFn) => <div style={{ height: '80px' }}>{storyFn()}</div>],
};
const redirect = action('redirect');
const isMyRoute = action('isMyRoute');

export const Default = () => <ListNav redirect={redirect} isMyRoute={isMyRoute} />;

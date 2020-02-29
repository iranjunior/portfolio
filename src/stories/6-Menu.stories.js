import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuDropdown from '../components/menu/dropdown';

export default {
  title: 'MenuDropdown',
  decorators: [(storyFn) => (
    <div style={{
      width: '500px', height: '70px', transform: 'translateY(-220px)',
    }}
    >
      {storyFn()}
    </div>
  )],
};

const redirect = action('redirect');
const isMyRoute = action('isMyRoute');

export const Default = () => (
  <MenuDropdown
    redirect={redirect}
    isMyRoute={isMyRoute}
  />
);

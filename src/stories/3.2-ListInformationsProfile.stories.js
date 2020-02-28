import React from 'react';
import { action } from '@storybook/addon-actions';
import ListInformations from '../components/profile/informations';

export default {
  title: 'ListInformations',
  decorators: [(storyFn) => <div style={{ width: '380px', height: '550px', backgroundColor: '#100F3A' }}>{storyFn()}</div>],
};
const redirect = action('redirect');
export const Default = () => <ListInformations redirect={redirect} />;

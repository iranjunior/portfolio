import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/nav/button';

export default {
  title: 'ButtonNav',
  decorators: [(storyFn) => <div style={{ width: '500px', height: '80px' }}>{storyFn()}</div>],
};
const getCurriculum = action('getCurriculum');

export const Default = () => <Button getCurriculum={getCurriculum} />;

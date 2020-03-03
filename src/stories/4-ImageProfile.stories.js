import React from 'react';
import Image from '../components/simples/imageProfile';

export default {
  title: 'ImageProfile',
  decorators: [(storyFn) => <div style={{ width: '380px', height: '550px' }}>{storyFn()}</div>],
};

export const Default = () => <Image />;

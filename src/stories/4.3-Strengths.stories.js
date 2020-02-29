import React from 'react';
import Stengths from '../components/strengths';

export default {
  title: 'Stengths',
  decorators: [(storyFn) => (
    <div
      style={{
        height: '280px',
        width: '100%',
        backgroundColor: '#f5f0f0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: '50px',
      }}
    >
      {storyFn()}
    </div>
  )],
};

export const Default = () => <Stengths />;

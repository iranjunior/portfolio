/* eslint-disable import/prefer-default-export */
import React from 'react';
import Routes from '../../routes';

export const switchRoute = (path) => {
  const { component: Component } = Routes.filter((router) => router.path === path)[0];
  return <Component />;
};

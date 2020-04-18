/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropType from 'prop-types';

export default class Boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch() {

  }

  render() {
    if (this.state.error) {
      return <span>Ops, try reloading a page</span>;
    }
    return this.props.children;
  }
}

Boundary.propTypes = {
  children: PropType.element.isRequired,
};

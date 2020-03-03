import React from 'react';
import PropTypes from 'prop-types';
import Title from './styles';

const TitleComponent = ({ message }) => <Title tabIndex={0} aria-label={message}>{message}</Title>;

TitleComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
export default TitleComponent;

import React from 'react';
import PropTypes from 'prop-types';
import Title from './styles';

const TitleComponent = ({ message }) => <Title aria-label={message}>{message}</Title>;

TitleComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
export default TitleComponent;

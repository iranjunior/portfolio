import React from 'react';
import PropTypes from 'prop-types';
import { MdVerticalAlignBottom } from 'react-icons/md';

import { TextButton, Button } from './styles';

const ButtonComponent = ({ getCurriculum }) => (
  <TextButton
    onKeyPress={(event) => getCurriculum(event)}
    onClick={() => getCurriculum()}
  >
    Click aqui para baixar meu curriculo
    <Button>
      <MdVerticalAlignBottom size={30} />
    </Button>
  </TextButton>
);

ButtonComponent.propTypes = {
  getCurriculum: PropTypes.func.isRequired,
};

export default ButtonComponent;

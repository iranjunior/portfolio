import React from 'react';
import PropTypes from 'prop-types';
import { MdVerticalAlignBottom } from 'react-icons/md';

import { TextButton, Button } from './styles';

const ButtonComponent = ({ getCurriculum, keyPressAction }) => (
  <TextButton
    role="button"
    aria-label="Click aqui para baixar meu curriculo"
    tabIndex={0}
    onKeyPress={(event) => keyPressAction(event, getCurriculum)}
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
  keyPressAction: PropTypes.func.isRequired,
};

export default ButtonComponent;

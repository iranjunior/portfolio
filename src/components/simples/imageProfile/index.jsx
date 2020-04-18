import React from 'react';
import Proptypes from 'prop-types';
import {
  Image, WrapperButton,
} from './styles';
import Button from '../button';

import profile from '../../../assets/profile.jpg';
import Boundary from '../erros/boundary';

const ImageComponent = ({ getCurriculum, keyPressAction }) => (
  <Boundary>
    <Image alt="foto do iran" src={profile} />
    <WrapperButton>
      <Button keyPressAction={keyPressAction} getCurriculum={getCurriculum} />
    </WrapperButton>
  </Boundary>
);
ImageComponent.propTypes = {
  getCurriculum: Proptypes.func.isRequired,
  keyPressAction: Proptypes.func.isRequired,
};
export default ImageComponent;

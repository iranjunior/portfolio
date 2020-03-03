import React from 'react';
import Proptypes from 'prop-types';
import {
  Image, WrapperButton,
} from './styles';
import Button from '../button';

import profile from '../../../assets/profile.jpg';

const ImageComponent = ({ getCurriculum, keyPressAction }) => (
  <>
    <Image alt="foto do iran" src={profile} />
    <WrapperButton>
      <Button keyPressAction={keyPressAction} getCurriculum={getCurriculum} />
    </WrapperButton>
  </>
);
ImageComponent.propTypes = {
  getCurriculum: Proptypes.func.isRequired,
  keyPressAction: Proptypes.func.isRequired,
};
export default ImageComponent;

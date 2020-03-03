import React from 'react';
import Proptypes from 'prop-types';
import {
  Image, WrapperButton,
} from './styles';
import Button from '../button';

import profile from '../../../assets/profile.jpg';

const ImageComponent = ({ getCurriculum }) => (
  <>
    <Image alt="foto do iran" src={profile} />
    <WrapperButton>
      <Button getCurriculum={getCurriculum} />
    </WrapperButton>
  </>
);
ImageComponent.propTypes = {
  getCurriculum: Proptypes.func.isRequired,
};
export default ImageComponent;

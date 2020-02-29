import React from 'react';
import {
  Image, WrapperButton,
} from './styles';
import Button from '../button';

import profile from '../../assets/profile.jpg';
import { getCurriculum } from '../nav/services';

const ImageComponent = () => (
  <>
    <Image alt="foto do iran" src={profile} />
    <WrapperButton>
      <Button getCurriculum={getCurriculum} />
    </WrapperButton>
  </>
);
export default ImageComponent;

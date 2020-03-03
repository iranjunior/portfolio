import React from 'react';

import Card from '../../simples/cards';
import Introduction from '../../simples/introduction';
import Destak from '../../simples/destak';

import { keyPressAction } from '../../../services';

import {
  Container, CardZone,
} from './styles';

import formations from '../../../constants/formations';

const FormationComponent = () => (
  <Container>
    <Introduction message="Essas são as minhas" />
    <Destak message="Formações" />
    <CardZone>
      {formations.map((formation) => (
        <Card tabIndex={0} key={formation.name} data={formation} type="formation" keyPressAction={keyPressAction} />
      ))}
    </CardZone>
  </Container>
);
export default FormationComponent;

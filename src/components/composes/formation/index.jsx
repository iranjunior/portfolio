import React from 'react';

import Card from '../../simples/cards';
import Introduction from '../../simples/introduction';
import Destak from '../../simples/destak';

import {
  Container, CardZone,
} from './styles';

import data from './data.json';

const FormationComponent = () => (
  <Container>
    <Introduction message="Essas são as minhas" />
    <Destak message="Formações" />
    <CardZone>
      {data.map((formation) => (
        <Card key={formation.name} data={formation} type="formation" />
      ))}
    </CardZone>
  </Container>
);
export default FormationComponent;

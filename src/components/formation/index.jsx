import React from 'react';
import Card from '../cards';

import {
  Container, Summary, Name, CardZone,
} from './styles';

import data from './data.json';

const Portfolio = () => (
  <Container>
    <Summary>
      Essas são as minhas
    </Summary>
    <Name>Formações</Name>
    <CardZone>
      {data.map((formation) => (
        <Card key={formation.name} data={formation} type="formation" />
      ))}
    </CardZone>
  </Container>
);
export default Portfolio;

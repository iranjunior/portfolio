import React from 'react';
import Card from '../cards';

import {
  Container, Summary, CardZone, Name,
} from './styles';
import data from './data.json';

const Portfolio = () => (
  <Container>
    <Summary>
      Aqui está meu
    </Summary>
    <Name>Portfolio</Name>
    <CardZone>
      {data.map((repo) => (
        <Card key={repo.name} data={repo} />
      ))}
    </CardZone>
  </Container>
);
export default Portfolio;

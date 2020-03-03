import React from 'react';

import Card from '../../simples/cards';
import Introduction from '../../simples/introduction';
import Destak from '../../simples/destak';


import {
  Container, CardZone,
} from './styles';
import data from './data.json';

const Portfolio = () => (
  <Container>
    <Introduction message="Aqui está meu" />
    <Destak message="Portfolio" />
    <CardZone>
      {data.map((repo) => (
        <Card key={repo.name} type="portfolio" data={repo} />
      ))}
    </CardZone>
  </Container>
);
export default Portfolio;

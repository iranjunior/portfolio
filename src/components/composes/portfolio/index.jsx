import React from 'react';

import Card from '../../simples/cards';
import Introduction from '../../simples/introduction';
import Destak from '../../simples/destak';

import portfolios from '../../../constants/portfolio';

import {
  Container, CardZone,
} from './styles';

const Portfolio = () => (
  <Container>
    <Introduction message="Aqui está meu" />
    <Destak message="Portfolio" />
    <CardZone>
      {portfolios.map((portfolio) => (
        <Card key={portfolio.name} type="portfolio" data={portfolio} />
      ))}
    </CardZone>
  </Container>
);

export default Portfolio;

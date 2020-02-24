import React, { useState } from 'react';

import {
  Container, Summary, Card, Name, CardHeader, Decision, CardContent, TitleCard, DateCard, Content,
} from './styles';
import { toggleActive } from './serivces';

const Portfolio = () => {
  const [activeContent, setActiveContent] = useState(false);

  return (
    <Container>
      <Summary>
        Essas são as minhas
      </Summary>
      <Name>Formações</Name>
      <Card>
        <CardHeader>
          <TitleCard>Engenharia de Automação e Controle</TitleCard>
          <DateCard>Concluido em 2019</DateCard>
        </CardHeader>
        <CardContent active={activeContent}>
          <Content>
            Minim nulla nulla eiusmod aute sint. Ipsum reprehenderit ullamco
            aute proident dolor officia. Proident aliqua proident consectetur aliquip
            sit dolore ad ipsum esse consequat irure dolor excepteur eu. Laboris dolor
            voluptate quis reprehenderit laboris labore ut commodo occaecat id eiusmod
            consectetur minim ullamco. Labore tempor laborum pariatur nisi ex Lorem labore
            amet officia in mollit non veniam fugiat. Ea qui enim fugiat reprehenderit ea
            ex occaecat nisi incididunt.

          </Content>
        </CardContent>
        <Decision onClick={() => toggleActive(setActiveContent, activeContent)}>
          {activeContent ? 'Mostrar menos...' : 'Leia mais...'}
        </Decision>
      </Card>
      <Card>
        <CardHeader>
          <TitleCard>Engenharia de Automação e Controle</TitleCard>
          <DateCard>Concluido em 2019</DateCard>
        </CardHeader>
        <CardContent active={activeContent}>
          <Content>
            Minim nulla nulla eiusmod aute sint. Ipsum reprehenderit ullamco
            aute proident dolor officia. Proident aliqua proident consectetur aliquip
            sit dolore ad ipsum esse consequat irure dolor excepteur eu. Laboris dolor
            voluptate quis reprehenderit laboris labore ut commodo occaecat id eiusmod
            consectetur minim ullamco. Labore tempor laborum pariatur nisi ex Lorem labore
            amet officia in mollit non veniam fugiat. Ea qui enim fugiat reprehenderit ea
            ex occaecat nisi incididunt.

          </Content>
        </CardContent>
        <Decision onClick={() => toggleActive(setActiveContent, activeContent)}>
          {activeContent ? 'Mostrar menos...' : 'Leia mais...'}
        </Decision>
      </Card>
    </Container>
  );
};
export default Portfolio;

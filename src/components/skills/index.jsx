import React from 'react';

import {
  Container, Summary, Name, Description, WrapperSkills, Skills, Progress, WrapperProgress, Title, FutureSkillsContainer, FutureSkills,
} from './styles';

const About = () => (
  <Container>
    <Summary>
      Aqui estão as minhas
    </Summary>
    <Name>
      Habilidades
    </Name>
    <Description>
      Esse deserunt sunt elit adipisicing. Irure voluptate commodo esse amet ullamco. Nulla irure reprehenderit commodo sint et quis magna excepteur. Minim in dolor aliqua est sit sint ipsum ex elit irure.

      Magna cillum nisi et excepteur dolore fugiat magna et veniam nulla culpa. Reprehenderit velit sit enim nisi consequat amet est voluptate sit proident nulla. Consectetur fugiat magna cillum elit qui sit consequat enim anim laborum. Magna commodo pariatur nostrud officia adipisicing esse ad duis cillum et laboris nulla anim adipisicing. Laboris dolor cillum nulla esse. Pariatur ea ut irure officia sunt Lorem sunt incididunt commodo culpa voluptate minim in laboris. Laboris aliqua pariatur enim veniam id do reprehenderit consequat in nisi voluptate voluptate duis.
    </Description>
    <WrapperSkills>
      <Skills>
        ReactJS
        <WrapperProgress>
          <Progress value={80}>
            80%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        React Native
        <WrapperProgress>
          <Progress value={60}>
            60%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        Rest
        <WrapperProgress>
          <Progress value={100}>
            100%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        GraphQL
        <WrapperProgress>
          <Progress value={80}>
            80%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        Websockets
        <WrapperProgress>
          <Progress value={100}>
            100%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        StoryBooks
        <WrapperProgress>
          <Progress value={40}>
            40%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        SEO
        <WrapperProgress>
          <Progress value={100}>
            100%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        PWA
        <WrapperProgress>
          <Progress value={80}>
            80%
          </Progress>
        </WrapperProgress>
      </Skills>
      <Skills>
        SPA
        <WrapperProgress>
          <Progress value={100}>
            100%
          </Progress>
        </WrapperProgress>
      </Skills>
    </WrapperSkills>
    <Title>
      Habilidades futuras...
    </Title>
    <FutureSkillsContainer>
      <FutureSkills>
        Microfrontend
      </FutureSkills>
      <FutureSkills>
        Angular
      </FutureSkills>
      <FutureSkills>
        Flutter
      </FutureSkills>
    </FutureSkillsContainer>
  </Container>
);
export default About;

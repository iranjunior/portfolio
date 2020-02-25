import React from 'react';
import { redirect } from './services';

import {
  Container, Summary, Name, Description, WrapperSkills, Skills, Title, FutureSkillsContainer, FutureSkills,
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
      No desenvolvimento frontend sempre fui focado no ReactJS. Já trabalhei brevemente
      com o AngularJS, mas não me aprodundei no framework. Atualmente estudo para melhorar
      meus conhecimentos no ReactJS, e React Native para desenvolvimento mobile.
      Organizo meus estudo por fases, com objeticos e prazos, tendo em vista isso tenho
      como meta para o meio deste ano, começar a estudar Angular. E realizar meus primeiros
      projetos usando este framework. Até o final deste ano pretendo começar os estudo do
      Flutter. Fazer meus primeiros aplicativos usando essa tecnologia,
      e "deploya-la" nas respectivas lojas.
    </Description>
    <WrapperSkills>
      <Skills onClick={() => redirect('react')}>
        ReactJS
      </Skills>
      <Skills onClick={() => redirect('reactNative')}>
        React Native
      </Skills>
      <Skills onClick={() => redirect('rest')}>
        Rest
      </Skills>
      <Skills onClick={() => redirect('graphql')}>
        GraphQL
      </Skills>
      <Skills onClick={() => redirect('websockets')}>
        Websockets
      </Skills>
      <Skills onClick={() => redirect('storybooks')}>
        StoryBooks
      </Skills>
      <Skills onClick={() => redirect('seo')}>
        SEO
      </Skills>
      <Skills onClick={() => redirect('pwa')}>
        PWA
      </Skills>
      <Skills onClick={() => redirect('spa')}>
        SPA
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

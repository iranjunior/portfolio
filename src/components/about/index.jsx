import React from 'react';

import {
  Container, Summary, Title, Name, Description, WrapperStrength, Strength, Front, Back,
} from './styles';

const About = () => (
  <Container>
    <Summary>
      Oi, eu sou o
    </Summary>
    <Name>
      Iran Junior
    </Name>
    <Title>
      Descrição
    </Title>
    <Description>
      Desenvolvedor Frontend, por paixão. Sou oriundo da engenharia de controle
      e automação, no meio da minha graduação, senti a necessidade de realizar o desenvolvimento
      de uma aplicação Web. Tive a opção de pegar serviços prontos, mas optei por aprender
      sobre coisas que até então era desconhecido a mim.

      Comecei estudando o basico do desenvolviment com HTML, CSS, e PHP.
      Estudando apenas pelo youtube, comecei
      a fazer meus primeiros projetos para WEB, e como já era de se esperar foi uma verdadeira
      tragédia.
      Códigos sujos, de baixa escalabilidade, e pouco performaticos, era minha marca registrada.
      Mas então
      continuei estudando, sempre aprendendo com meus erros, e com pessoas mais qualificadas que eu
      que me ajudaram na minha jornada de aprendizado.

      Em meados do ano de 2018, comecei a estudar o javascript de forma mais efetiva. Conheci o
      nodejs, e seu poder, e desde então não larguei mais. Sou completamente apaixonado por essa
      linguagem, pela sua comunidade e pelas empresas que a usam. Sou desenvolvedor Frontend porque
      tenho ainda grande apresso por telas bem feitas, com animações cativates e principalmente
      pela experiencia que o usuario tem com a aplicação bem construida.

      Hoje estudo diariamente sobre peformace no frontend, o que tem de novo na area,
      bibliotecas novas,
      e como será o futuro desse parte tão importante do desenvolvimento web.
      Tenho como objetivo ser
      um frontend melhor e ser reconhecido nacional, ou mundialmente pelo meu bom trabalho.
    </Description>
    <Title>
      Fortalezas
    </Title>
    <WrapperStrength>
      <Strength>
        <Front>
          Positividade
        </Front>
        <Back>
          Sou uma pessoa de pensamento positvo que não cansa
          no primeiro não.
        </Back>
      </Strength>
      <Strength>
        <Front>
          Foco
        </Front>
        <Back>
          Sou uma pessoa de objetivo claro e determinado a alcança-lo.
        </Back>
      </Strength>
      <Strength>
        <Front>
          Estudioso
        </Front>
        <Back>
          Sou uma pessoa que está em constante aprendizado. Amo aprender coisas novas
        </Back>
      </Strength>
      <Strength>
        <Front>
          Realização
        </Front>
        <Back>
          Sou uma pessoa que amo tarefas concluidas. Que preso pela conquista, nem que seja pequena
        </Back>
      </Strength>
      <Strength>
        <Front>
          Futurista
        </Front>
        <Back>
          Sou uma pessoa que pensa no futuro, e em como minhas ações pode impacta-lo.
        </Back>
      </Strength>
    </WrapperStrength>
  </Container>
);
export default About;

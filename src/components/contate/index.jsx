import React, { useState } from 'react';
import { SendMail } from './services';

import {
  Container, Summary, Title, Name, MessageZone, Email, Message, Send, IconSend, Loadding,
} from './styles';

const About = () => {
  const [loadding, setLoadding] = useState(false);

  return (
    <Container>
      <Summary>
        Me mande uma
      </Summary>
      <Title>
        Mensagem
      </Title>
      <MessageZone onSubmit={(event) => SendMail(event)(setLoadding)}>
        <Name id="name" placeholder="Seu nome" type="text" />
        <Email id="email" placeholder="Seu email" type="email" />
        <Message id="message" placeholder="Messagem" />
        <Send type="submit">
          {loadding ? 'Aguarde...' : 'Enviar'}
          <Loadding loadding={loadding} />
          <IconSend loadding={loadding} size={25} />
        </Send>
      </MessageZone>
    </Container>
  );
};
export default About;

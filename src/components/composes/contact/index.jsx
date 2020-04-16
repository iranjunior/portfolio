import React, { useState } from 'react';
import Introduction from '../../simples/introduction';
import Destak from '../../simples/destak';

import { SendMail } from '../../../services';

import {
  Container, Name, MessageZone, Email, Message, Send, IconSend, Loadding,
} from './styles';

const Contact = () => {
  const [loadding, setLoadding] = useState(false);

  return (
    <Container>
      <Introduction message="Me mande uma" />
      <Destak message="Mensagem" />
      <MessageZone onSubmit={(event) => SendMail(event)(setLoadding)}>
        <Name minLength={2} required id="name" placeholder="Seu nome" type="text" data-testid="name" />
        <Email required id="email" placeholder="Seu email" type="email" data-testid="email" />
        <Message minLength={10} required id="message" placeholder="Messagem" data-testid="message" />
        <Send type="submit">
          {loadding ? 'Aguarde...' : 'Enviar'}
          <Loadding loadding={loadding} />
          <IconSend loadding={loadding} size={25} />
        </Send>
      </MessageZone>
    </Container>
  );
};
export default Contact;

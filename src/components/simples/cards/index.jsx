import React, { memo, useState } from 'react';

import PropTypes from 'prop-types';
import { toggleActive } from '../../../services';

import {
  Card, Title, Subtitle, References, Reference, Links, CardHeader,
  CardContent, TitleCard, DateCard, Content, Decision,
} from './styles';

const Cards = ({ data, type }) => {
  const [activeContent, setActiveContent] = useState(false);
  if (type === 'portfolio') {
    return (
      <Card>
        <Title>{data.name}</Title>
        <Subtitle>{data.description}</Subtitle>
        <References>
          <Reference>
            Repositorio:
            {' '}
            {' '}
            <Links href={data.html_url}>
              {data.html_url}
            </Links>
          </Reference>
        </References>
      </Card>
    );
  }
  return (
    <Card>
      <CardHeader>
        <TitleCard>{data.name}</TitleCard>
        {
          data.complete ? (
            <DateCard>
              Concluido em
              {' '}
              {data.date}
            </DateCard>
          ) : (
            <DateCard>
              Concluir em
              {' '}
              {data.date}
            </DateCard>
          )
        }
      </CardHeader>
      <CardContent active={activeContent}>
        <Content>
          {data.description}
        </Content>
      </CardContent>
      <Decision onClick={() => toggleActive(setActiveContent, activeContent)}>
        {activeContent ? 'Mostrar menos...' : 'Leia mais...'}
      </Decision>
    </Card>
  );
};

Cards.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string,
    date: PropTypes.string,
    complete: PropTypes.bool,
  }).isRequired,
};

export default memo(Cards);

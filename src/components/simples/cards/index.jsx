import React, { memo, useState } from 'react';

import PropTypes from 'prop-types';
import { toggleActive } from '../../../services';

import {
  Card, Title, Subtitle, References, Reference, Links, CardHeader,
  CardContent, TitleCard, DateCard, Content, Decision,
} from './styles';
import Boundary from '../erros/boundary';

const Cards = ({ data, type, keyPressAction }) => {
  const [activeContent, setActiveContent] = useState(false);
  if (type === 'portfolio') {
    return (
      <Card>
        <Title
          aria-label={data.name}
          tabIndex={0}
        >
          {data.name}

        </Title>
        <Subtitle
          aria-label={data.description}
          tabIndex={0}
        >
          {data.description}

        </Subtitle>
        <References>
          <Reference
            tabIndex={0}
            aria-label="Repositorio"
          >
            Repositorio:
            {' '}
            {' '}
            <Links
              tabIndex={0}
              href={data.html_url}
            >
              {data.html_url}
            </Links>
          </Reference>
        </References>
      </Card>
    );
  }
  return (
    <Boundary>

      <Card>
        <CardHeader>
          <TitleCard
            aria-label={data.name}
            tabIndex={0}
          >
            {data.name}

          </TitleCard>
          {
          data.complete ? (
            <DateCard
              aria-label={`Concluido em ${data.date}`}
              tabIndex={0}
            >
              Concluido em
              {' '}
              {data.date}
            </DateCard>
          ) : (
            <DateCard
              aria-label={`Concluir em ${data.date}`}
              tabIndex={0}
            >
              Concluir em
              {' '}
              {data.date}
            </DateCard>
          )
        }
        </CardHeader>
        <CardContent active={activeContent}>
          <Content
            aria-label={data.description}
            tabIndex={0}
          >
            {data.description}
          </Content>
        </CardContent>
        <Decision
          tabIndex={0}
          onKeyPress={(event) => keyPressAction(event, toggleActive,
            setActiveContent, activeContent)}
          onClick={() => toggleActive(setActiveContent, activeContent)}
        >
          {activeContent ? 'Mostrar menos...' : 'Leia mais...'}
        </Decision>
      </Card>
    </Boundary>
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
  keyPressAction: PropTypes.func.isRequired,
};

Card.defaultProps = {
  keyPressAction: () => {},
};
export default memo(Cards);

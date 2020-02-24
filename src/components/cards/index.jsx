import React, { memo } from 'react';

import PropTypes from 'prop-types';

import {
  Card, Title, Subtitle, References, Reference, Links,
} from './styles';

const Cards = ({ data }) => (
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

Cards.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(Cards);

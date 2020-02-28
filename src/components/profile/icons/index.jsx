import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';
import Icons from './icons';

const IconsComponents = ({ redirect }) => (
  <Container>
    {
        Icons.map((icon) => (
          <icon.icon
            key={icon.name}
            onClick={() => redirect(icon.link.type, icon.link.url)}
            size={25}
          />
        ))
    }
  </Container>
);

IconsComponents.propTypes = { redirect: PropTypes.func.isRequired };

export default IconsComponents;

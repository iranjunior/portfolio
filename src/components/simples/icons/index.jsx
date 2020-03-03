import React from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

const IconsComponents = ({ icons, redirect }) => (
  <Container>
    {
        icons.map((icon) => (
          <icon.icon
            key={icon.name}
            onClick={() => redirect(icon.link.type, icon.link.url)}
            size={25}
          />
        ))
    }
  </Container>
);

IconsComponents.defaultProps = {
  icons: [],
};

IconsComponents.propTypes = {
  redirect: PropTypes.func.isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  })),
};

export default IconsComponents;

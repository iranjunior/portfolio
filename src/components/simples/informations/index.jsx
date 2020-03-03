import React from 'react';
import PropTypes from 'prop-types';

import {
  List, Item, Information,
} from './styles';


const InformationsComponent = ({ informations, redirect }) => (
  <List>
    <Item>
      Informações Gerais
    </Item>
    {
      informations.map((information) => {
        if (information.link) {
          return (
            <Item
              key={information.label}
            >
              <information.logo />
              {`${information.label}: `}
              {' '}
              <Information
                link
                onClick={() => redirect(information.link.type, information.link.url)}
              >
                {information.information}
              </Information>
            </Item>
          );
        }
        return (
          <Item
            key={information.label}
          >
            <information.logo />
            {`${information.label}: `}
            {' '}
            <Information>
              {information.information}
            </Information>
          </Item>

        );
      })
    }
  </List>
);

InformationsComponent.defaultProps = {
  informations: [],
};

InformationsComponent.propTypes = {
  redirect: PropTypes.func.isRequired,
  informations: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired,
  })),
};

export default InformationsComponent;

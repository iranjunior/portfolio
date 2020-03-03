import React from 'react';
import PropTypes from 'prop-types';

import Informations from './informations';

import {
  List, Item, Information,
} from './styles';


const InformationsComponent = ({ redirect }) => (
  <List>
    <Item>
      Informações Gerais
    </Item>
    {
        Informations.map((information) => {
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

InformationsComponent.propTypes = {
  redirect: PropTypes.func.isRequired,
};

export default InformationsComponent;

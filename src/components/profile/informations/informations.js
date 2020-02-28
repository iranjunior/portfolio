import styled from 'styled-components';

import {
  MdBorderColor, MdLocationOn, MdStarBorder, MdEmail, MdPhone, MdDesktopWindows,
} from 'react-icons/md';

const component = (Logo) => styled(Logo)`margin-right: 20px`;


export default [
  {
    label: 'Nome',
    information: 'Iran Junior',
    logo: component(MdBorderColor),
  },
  {
    label: 'Localização',
    information: 'Recife, PE',
    logo: component(MdLocationOn),
  },
  {
    label: 'Idade',
    information: '25 anos',
    logo: component(MdStarBorder),
  },
  {
    label: 'Email',
    information: 'iranjuniordev@gmail.com',
    logo: component(MdEmail),
    link: {
      url: 'iranjuniordev@gmail.com',
      type: 'email',
    },
  },
  {
    label: 'Phone',
    information: '+55 81 99790-7717',
    logo: component(MdPhone),
  },
  {
    label: 'Site',
    information: 'iranjunior.herokuapp.com',
    logo: component(MdDesktopWindows),
    link: {
      url: 'iranjunior.herokuapp.com',
      type: 'site',
    },

  },
];

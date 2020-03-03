import styled from 'styled-components';
import {
  FaInstagram, FaGithub, FaLinkedin, FaMedium,
} from 'react-icons/fa';

const component = (Logo) => styled(Logo)`
    cursor: pointer;
    margin-right: 25px;
    margin-top: 20px;
    :hover{
      color: #fff;
    }
`;


export default [
  {
    icon: component(FaInstagram),
    name: 'instagram',
    link: {
      type: 'instagram',
      url: 'iranjunior__',
    },
  },
  {
    icon: component(FaGithub),
    name: 'github',
    link: {
      type: 'github',
      url: 'iranjunior',
    },
  },
  {
    icon: component(FaLinkedin),
    name: 'linkedin',
    link: {
      type: 'linkedin',
      url: 'iran-junior',
    },
  },
  {
    icon: component(FaMedium),
    name: 'medium',
    link: {
      type: 'medium',
      url: '@iranjunior94',
    },
  },
];

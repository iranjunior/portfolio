import { toast } from 'react-toastify';
import Api from './email';
import descriptions from '../constants/descriptions';
import Curriculum from '../assets/IranJuniorFrontEnd.pdf';

export const SendMail = (event) => async (setLoadding) => {
  event.preventDefault();
  const [{ value: name }, { value: email }, { value: message }] = document.querySelector('form').childNodes;

  setLoadding(true);
  const response = await Api.sendEmail({
    name,
    email,
    message,
  });
  setLoadding(false);
  if (response.success) { toast.success(response.message); } else { toast.error(response.message); }
};

export const redirect = (type, data) => {
  let url = '';
  const options = {
    site: 'https://',
    email: 'mailto:',
    medium: 'https://medium.com/',
    instagram: 'https://instagram.com/',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
  };
  if (type !== 'link') {
    url = `${options[type]}${data}`;
  } else {
    url = `${data}`;
  }

  window.open(url, '_blank');
};
export const changePath = (path) => { window.location.pathname = `${path}`; };
export const toggleActive = (setActived, value) => { setActived(!value); };
export const isMyRoute = (route) => window.location.pathname === `${route}`;
export const keyPressAction = (event, action, ...params) => { if (event === undefined || event.key === ' ' || event.key === 'Enter') action(...params); };
export const getCurriculum = () => {
  const link = document.createElement('a'); link.href = Curriculum; link.download = 'IranJuniorFrontEnd.pdf'; link.click();
};
export const getDescriptions = (type) => type !== '' && descriptions[type];
export const getTitles = () => {};

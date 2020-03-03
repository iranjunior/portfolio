import { toast } from 'react-toastify';
import Api from './email';
import descriptions from '../constants/descriptions';

export const SendMail = (event) => (setLoadding) => {
  event.preventDefault();
  const [{ value: name }, { value: email }, { value: message }] = document.querySelector('form').childNodes;

  setLoadding(true);
  Api.post('/v1/send', {
    name,
    email,
    message,
  }).then((res) => {
    if (res.status === 200) {
      setLoadding(false);
      toast.success('Sua mensagem foi enviada com sucesso');
    }
  }).catch(() => {
    setLoadding(false);
    toast.error('Tivemos um problema, tente novamente mais tarde');
  });
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
export const changePath = (path) => window.location.pathname = `${path}`;
export const toggleActive = (setActived, value) => { setActived(!value); };
export const isMyRoute = (route) => window.location.pathname === `${route}`;
export const getCurriculum = () => console.log('Pega curriculo');

export const getDescriptions = (type) => type !== '' && descriptions[type];
export const getTitles = () => {};

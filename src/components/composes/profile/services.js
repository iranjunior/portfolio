/* eslint-disable import/prefer-default-export */
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

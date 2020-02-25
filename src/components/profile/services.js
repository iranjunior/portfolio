/* eslint-disable import/prefer-default-export */
export const redirect = (type, email) => {
  const options = {
    email: 'mailto:',
    medium: 'https://medium.com/',
    instagram: 'https://instagram.com/',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
  };
  const url = `${options[type]}${email}`;
  window.open(url, '_blank');
};

/* eslint-disable import/prefer-default-export */
export const redirect = (tech) => {
  const options = {
    react: 'https://pt-br.reactjs.org/',
    reactNative: 'https://reactnative.dev/',
    rest: 'https://pt.wikipedia.org/wiki/REST',
    graphql: 'https://graphql.org/',
    websockets: 'https://socket.io/',
    storybooks: 'https://storybook.js.org/',
    seo: 'https://developers.google.com/search/docs/guides/javascript-seo-basics',
    pwa: 'https://developers.google.com/web/progressive-web-apps',
    spa: 'https://developers.google.com/web/updates/2018/05/beyond-spa',
  };
  window.open(options[tech], '_blank');
};

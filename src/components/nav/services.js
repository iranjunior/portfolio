export const redirect = (route) => { window.location.pathname = `${route}`; };
export const isMyRoute = (route) => window.location.pathname === `${route}`;
export const getCurriculum = () => console.log('Pega curriculo');

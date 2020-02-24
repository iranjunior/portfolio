export const redirect = (route) => { window.location.pathname = `/${route}`; };
export const isMyRoute = (route) => window.location.pathname === `/${route}`;

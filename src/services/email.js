import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_BASEURL_EMAILSERVICE,
});
async function sendEmail({ name, email, message }) {
  if (name.trim() && email.trim() && message.trim()) {
    const response = await this.post('/v1/send', {
      name,
      email,
      message,
    });

    if (response.status === 200) {
      return {
        status: 200,
        success: true,
        error: false,
        message: 'Sua mensagem foi enviada com sucesso',
      };
    }
    return {
      status: 500,
      success: false,
      error: true,
      message: 'Tivemos um problema, tente novamente mais tardeSua mensagem foi enviada com sucesso',
    };
  }
  return {
    status: 400,
    success: false,
    error: true,
    message: 'Dados enviados não são validos ',
  };
}
Object.defineProperty(api, 'sendEmail', {
  value: sendEmail,
  writable: false,
});
export default api;

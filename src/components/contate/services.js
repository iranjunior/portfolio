/* eslint-disable import/prefer-default-export */
import { toast } from 'react-toastify';
import Api from '../../services/email';

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

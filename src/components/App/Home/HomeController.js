import axios from 'axios';

const LoginController = {
  login: (pseudo, password) => new Promise((succes, fail) => {
    axios.post(`http://localhost:8080/login/`, { pseudo, password })
      .then(({ data }) => {
        succes(data);
      })
      .catch(fail);
  }),
};

export default LoginController;

import axios from 'axios';

const LoginController = {
  login: (pseudo, password) => new Promise((succes, fail) => {
    axios.post(`94.228.181.130:8081/login`, { pseudo, password })
      .then(({ data }) => {
        succes(data);
      })
      .catch(fail);
  }),
};

export default LoginController;

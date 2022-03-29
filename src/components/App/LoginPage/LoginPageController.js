import axios from 'axios';

const LoginController = {
  login: (user) => new Promise((succes, fail) => {
    axios.post(`http://localhost:8081/authentification`, user)
      .then(({ data }) => {
        succes(data);
      })
      .catch(fail);
  }),
};

export default LoginController;

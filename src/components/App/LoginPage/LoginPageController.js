import axios from 'axios';

const LoginController = {
  login: (user) => new Promise((succes, fail) => {
    console.log(user);
    axios.post(`http://localhost:8081/`, user)
      .then(({ data }) => {
        succes(data);
      })
      .catch(fail);
  }),
};

export default LoginController;

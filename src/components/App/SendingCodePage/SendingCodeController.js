import axios from 'axios';

const SendingCodeController = {
  connection: (values) => new Promise((succes, fail) => {
    axios.post(`http://localhost:8081/`, values)
      .then(({ data }) => {
        succes(data);
      })
      .catch(fail);
  }),
};

export default SendingCodeController;

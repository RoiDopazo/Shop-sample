import Axios from 'axios';
import Config from 'react-native-config';

const AxiosInstance = Axios.create({
  baseURL: Config.REACT_APP_API_ENDPOINT,
});

AxiosInstance.defaults.params = {};

AxiosInstance.interceptors.request.use((config) => {
  config.params['apiKey'] = Config.REACT_APP_API_KEY;
  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return Promise.resolve(response.data);
    }
    return Promise.resolve(response);
  },
  async (error) => {},
);



export default AxiosInstance;

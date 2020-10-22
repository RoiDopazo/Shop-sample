import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: 'https://api.spoonacular.com/',
});

AxiosInstance.defaults.params = {};

AxiosInstance.interceptors.request.use((config) => {
  config.params['blah-defaut-param'] = 'blah-blah-default-value';
  return config;
});


export default AxiosInstance;

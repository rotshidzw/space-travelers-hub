import http from './client';

const getRockets = (url) => http.get(url);
const getMissions = (url) => http.get(url);

const HttpService = {
  getRockets,
  getMissions,
};

export default HttpService;

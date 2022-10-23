import axios from 'axios';
const KEY = 'VDtyNBw6IhX35OH0DdayntQ87AuLgA7E0N58nRuGV1p';

const axiosClient = axios.create({
  headers: {
    Authorization: 'Bearer apikey,' + KEY,
  },
});

axiosClient.interceptors.request.use(async (config) => config);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  },
);

export default axiosClient;

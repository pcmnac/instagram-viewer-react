import axios from 'axios';
const apiBaseUrl = process.env.REACT_APP_API_URL;

axios.defaults.baseURL = apiBaseUrl;

export async function getInstagramData(token) {
  const response = await axios.get('/api/user', {
    params: {
      token,
    },
  });

  return response.data;
}
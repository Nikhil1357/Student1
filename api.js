// import axios from 'axios';



// const api = axios.create({
//   baseURL: 'http://your_server_ip:5000/api',
// });

// export const register = async (email, password) => {
//   return await api.post('/users/register', { email, password });
// };

// export const login = async (email, password) => {
//   return await api.post('/users/login', { email, password });
// };

// export const getGrades = async () => {
//   return await api.get('/grades');
// };

// export const getAnnouncements = async () => {
//   return await api.get('/announcements');
// };

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});




const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error('There was an error making the request:', error);
  }
};

fetchData();


export const register = async (email, password) => {
  return await api.post('/users/register', { email, password });
};

export const login = async (email, password) => {
  return await api.post('/users/login', { email, password });
};

export const getGrades = async () => {
  return await api.get('/grades');
};

export const getAnnouncements = async () => {
  return await api.get('/announcements');
};

export default api;

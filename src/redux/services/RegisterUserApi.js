import axios from 'axios';

export const registerUserAPI = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3001/api/user/register', userData);   
    return response.data; // Puedes devolver los datos del usuario registrado si es necesario
  } catch (error) {
    throw error;
  }
};

export const logInUserAPI = async (userData) => {
  try {
    const response = await axios.post('http://localhost:3001/api/user/login', userData);   
    return response.data; // Puedes devolver los datos del usuario registrado si es necesario
  } catch (error) {
    throw error;
  }
};
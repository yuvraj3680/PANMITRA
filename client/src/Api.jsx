import axios from 'axios';

const API_URL = 'http://localhost:8000/user/';

export const createUser = async (user) => {
  try {
    const response = await axios.post(API_URL, user);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};



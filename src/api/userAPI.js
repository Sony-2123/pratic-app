import axios from './axios'; // uses the instance

// Example: GET request to fetch users
export const getUsers = async () => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Example: POST request to create a user
export const createUser = async (userData) => {
  try {
    const response = await axios.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

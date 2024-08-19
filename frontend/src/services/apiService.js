import axios from "axios";

const API_URL = `http://${process.env.REACT_APP_API_URL}:5000/api`;
console.log(API_URL);

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const registerUser = async (userData) => {
  try {
    console.log("came inside register...below is url...");
    console.log(`${API_URL}/auth/register`);
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add more API calls as needed

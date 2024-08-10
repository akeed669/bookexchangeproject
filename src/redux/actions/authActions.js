import axios from "axios";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const res = await axios.post("/api/auth/register", userData);
    dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const res = await axios.post("/api/auth/login", userData);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error.response.data });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

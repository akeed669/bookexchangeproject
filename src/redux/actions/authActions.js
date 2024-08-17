import { registerUser, loginUser } from "../../services/apiService";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const data = await registerUser(userData);
    dispatch({ type: "REGISTER_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const data = await loginUser(userData);
    dispatch({ type: "LOGIN_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

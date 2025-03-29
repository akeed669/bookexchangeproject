import { registerUser, loginUser } from "../../services/apiService";

export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const data = await registerUser(userData);
    if (data && data.token) {
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      window.location.href = "/dashboard";
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const data = await loginUser(userData);
    if (data && data.token) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      // Redirect to the dashboard or desired route
      window.location.href = "/dashboard";
    } else if (data && data.error) {
      dispatch({ type: "AUTH_ERROR", payload: data });
    }
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
  window.location.href = "/login";
};

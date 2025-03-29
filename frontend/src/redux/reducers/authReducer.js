const initialState = {
  user: null,
  token: localStorage.getItem("token"),
  loading: false,
  error: null,
};

const setLocalStorage = (action) => {
  try {
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("username", action.payload.user.username);
  } catch (error) {
    console.error("Failed to set localStorage:", error);
  }
};

const resetLocalStorage = () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  } catch (error) {
    console.error("Failed to reset localStorage:", error);
  }
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      setLocalStorage(action);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "LOGIN_SUCCESS":
      setLocalStorage(action);

      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        user: null,
        token: null,
        loading: false,
        error: action.payload.error,
      };
    case "LOGOUT":
      resetLocalStorage();
      return { ...state, user: null, token: null, loading: false };
    case "LOADING":
      return { ...state, loading: true };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default authReducer;

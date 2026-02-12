import api from "../axiosInstance";

export const signupUser = async (payload) => {
  const response = await api.post("/auth/signup", payload);
  return response.data;
};


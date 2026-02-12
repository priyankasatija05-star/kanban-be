import api from "../axiosInstance";

export const userDetails = async (email: string) => {
  const response = await api.get(`/user?email=${email}`);
  return response.data;
};

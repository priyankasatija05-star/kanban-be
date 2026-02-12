import api from "../axiosInstance";

export const generateTask = async (payload) => {
  const response = await api.post("/api/tasks/create", payload);
  return response.data;
};
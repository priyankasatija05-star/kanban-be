import api from "../axiosInstance";

export const getTask = async () => {
  const response = await api.get("/api/tasks/list");
  return response.data;
};
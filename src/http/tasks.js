import apiRequest from "./config";

export const getTasks = async () => {
  return await apiRequest("GET", "/tasks/getTasks");
}

export const doTask = async (taskId) => {
  return await apiRequest("POST", "/tasks/checkTasks", {}, { taskId });
}
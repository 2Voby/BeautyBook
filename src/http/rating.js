import apiRequest from "./config";

export const getLeaderboard = async () => {
  return await apiRequest("GET", "/usersInfo/getTop?limit=500");
}

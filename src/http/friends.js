import apiRequest from "./config";

export const getFriends = async () => {
  return await apiRequest("GET", "/user/getFriends");
}
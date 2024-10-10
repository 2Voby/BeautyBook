import apiRequest from "./config";

export const getDays = async () => {
  return await apiRequest("GET", "/dailyStreak/getRewardsList");
}

export const claimReward = async () => {
  return await apiRequest("GET", "/dailyStreak/claimReward");
}
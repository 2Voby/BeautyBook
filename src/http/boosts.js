import apiRequest from "./config";

export const claimAutoClicker = async () => {
  return await apiRequest("GET", "/game/claimMining");
}

export const getBoostsPrices = async () => {
  return await apiRequest("GET", "/upgrade/getPrices");
}

export const upgradeAutoClicker = async () => {
  return await apiRequest("POST", "/upgrade/autoclicker");
}

export const upgradeEnergyRecovery = async () => {
  return await apiRequest("POST", "/upgrade/energyrecovery");
}

export const upgradeTapLevel = async () => {
  return await apiRequest("POST", "/upgrade/moneypertap");
}

export const upgradeEnergyLevel = async () => {
  return await apiRequest("POST", "/upgrade/energy");
}
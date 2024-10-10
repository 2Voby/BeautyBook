import apiRequest from "./config";

export const sendTaps = async (tapsAmount, energy, tapStart = new Date().getTime()) => {
	return await apiRequest(
		"POST",
		"/game/tap",
		{},
		{
			tapsAmount,
			energy,
			tapStart,
		}
	);
};

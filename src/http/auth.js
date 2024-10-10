import apiRequest from "./config";
import { setUser, setSettings } from "../store/slice";

export const auth = async (dispatch, EnterReferralCode) => {
	let initData = window.Telegram.WebApp.initData;
	let endpoint = "login";
	if (import.meta.env.VITE_DEBUG_AUTH === "true") {
		endpoint = "login-dev";
		initData = {};
	}
	const response = await apiRequest("POST", `/user/${endpoint}`, {}, { initData, EnterReferralCode });
	localStorage.setItem("token", response.token);
	localStorage.setItem("expiresIn", response.expiresIn);

	dispatch(setUser(response.user));
	dispatch(setSettings(response.settings));
	return response;
};

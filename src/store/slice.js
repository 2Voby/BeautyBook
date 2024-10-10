import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		user: {},
		settings: {},
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setSettings: (state, action) => {
			state.settings = action.payload;
		},
	},
});

export const { setUser, setSettings } = dataSlice.actions;

export default dataSlice.reducer;

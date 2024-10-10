import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import routes from "./consts/pageRoutes";
// import { useDispatch } from "react-redux";
// import { auth } from "./http/auth";
// import { useEffect, useState } from "react";
// import Preloader from "./ui/Preloader/Preloader";

function App() {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	const startApp = window.Telegram.WebApp.initDataUnsafe.start_param;
	// 	auth(dispatch, startApp).then((response) => {
	// 		if (response.error) {
	// 			setIsError(true);
	// 		}
	// 		setTimeout(() => setIsLoading(false), 1000);
	// 	});
	// 	setInterval(() => auth(dispatch), 1000 * 60 * 30);
	// }, []);

	window.Telegram.WebApp.expand();
	window.Telegram.WebApp.disableVerticalSwipes();

	return (
		<div className="App">
			<main>
				<Routes>
					<Route path={routes.MAIN} element={<Main />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../components/common/ScrollToTop";
import Home from "../pages/Home";
import NotFound from "../pages/NotFoundPage";
import LoginPage from "../pages/loginpage/LoginPage";

export const BaseRoute: React.FC = () => {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};

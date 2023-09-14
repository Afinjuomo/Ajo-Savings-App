import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../components/common/ScrollToTop";
import Home from "../pages/Home";
import NotFound from "../pages/NotFoundPage";
import Layout from "../../components/layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import Savings from "../pages/sevings/Savings";
import Groups from "../pages/groups/Groups";
import Transactions from "../pages/transactions/Transactions";
import Settings from "../pages/settings/Settings";
import LoginPage from "../pages/loginpage/LoginPage";

export const BaseRoute: React.FC = () => {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} 
					<Route path="/" element={<Layout/>} >
					<Route index element={<Dashboard/>} />
					<Route path="/savings" element={<Savings/>} />
					<Route path="/groups" element={<Groups/>} />
					<Route path="/transactions" element={<Transactions/>} />
					<Route path="/settings" element={<Settings/>} />
				</Route>
					<Route path="/login" element={<LoginPage />} />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};

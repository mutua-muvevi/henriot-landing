//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Layout from "./layout/layout";

import Homepage from "./pages/home/home";
import CEC from "./pages/cec/cec";
import Diverse from "./pages/diverse/diverse";
import Exchange from "./pages/exchange/exchange";
import News from "./pages/news/news";
import InvestmentProcess from "./pages/process/process";
import Innovation from "./pages/innovation/innovation";
import InvestmentResources from "./pages/resources/resources";
import About from "./pages/about/about";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/",
			element: <Layout/>,
			children: [
				{
					path: "/home",
					element: <Homepage/>,	
				},
				{
					path: "/about",
					element: <About/>,	
				},
				{
					path: "/cec",
					element: <CEC/>,	
				},
				{
					path: "/diverse",
					element: <Diverse/>,	
				},
				{
					path: "/exchange",
					element: <Exchange/>,	
				},
				{
					path: "/investment-process",
					element: <InvestmentProcess/>,	
				},
				{
					path: "/investment-resources",
					element: <InvestmentResources/>,	
				},
				{
					path: "/innovation",
					element: <Innovation/>,	
				},
				{
					path: "/news",
					element: <News/>,	
				},
			]
		},
		{
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router
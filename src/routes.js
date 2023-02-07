//package imports
import { Navigate, useRoutes } from "react-router-dom";

//module imports
import Layout from "./layout/layout";

import Homepage from "./pages/home/home";
import CEC from "./pages/cec/cec";
import Diverse from "./pages/diverse/diverse";
import Exchange from "./pages/exchange/exchange";
import News from "./pages/news/news";

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
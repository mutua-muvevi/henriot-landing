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
import Contact from "./pages/contact/contact";
import WelcomePage from "./pages/welcome/welcome";
import NotFound from "./pages/error/404";
import Overview from "./pages/company/overview/overview";
import FAQ from "./pages/company/faq/faq";
import Careers from "./pages/company/careers/careers";
import Portfolio from "./pages/portfolio/portfolio";
import FXFund from "./pages/funds/ex/fxfund";

//router function
const Router = () => {
	return useRoutes([
		{
			path: "/",
			element: <WelcomePage/>,

		},
		{
			path: "/landing",
			element: <Layout/>,
			children: [
				{
					path: "/landing/main",
					element: <Homepage/>,	
				},
				{
					path: "/landing/about",
					element: <About/>,	
				},
				{
					path: "/landing/cec",
					element: <CEC/>,	
				},
				{
					path: "/landing/diverse",
					element: <Diverse/>,	
				},
				{
					path: "/landing/exchange",
					element: <FXFund/>,	
				},
				{
					path: "/landing/investment-process",
					element: <InvestmentProcess/>,	
				},
				{
					path: "/landing/investment-resources",
					element: <InvestmentResources/>,	
				},
				{
					path: "/landing/innovation",
					element: <Innovation/>,	
				},
				{
					path: "/landing/portfolio",
					element: <Portfolio/>,	
				},
				{
					path: "/landing/news",
					element: <News/>,	
				},
				{
					path: "/landing/contact",
					element: <Contact/>,	
				},
				{
					path: "/landing/company/overview",
					element: <Overview/>,	
				},
				{
					path: "/landing/company/faq",
					element: <FAQ/>,	
				},
				{
					path: "/landing/company/careers",
					element: <Careers/>,	
				},
			]
		},
		{
			path: "/404",
			element: <NotFound/>
		},
		{
			path: "*",
			element: <Navigate to="/404" replace/>
		}
	])
}

export default Router
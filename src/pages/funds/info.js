import { BsFileEarmarkSpreadsheetFill } from "react-icons/bs";
import FundsInvestmentCase from "../../assets/documents/Henriot_Investment_Management_Ltd_-Deck_Q4_2022.pdf";
import FundsHoldingCSV from "../../assets/documents/Fund_Holdings_CSV.xlsx";
import FundsHoldingPDF from "../../assets/documents/Fund_Holdings_PDF.pdf";
import SummaryProspectus from "../../assets/documents/Henriot_Investment_Memorandum.pdf";

const styledIcon={

}

export const foreignExchangefundsItem = {
	bannerItems : {
		videoLink: "https://res.cloudinary.com/dqweh6zte/video/upload/v1677246028/henriot/video_vvjwad.mp4",
		title: "FOREIGN EXCHANGE FUND",
		subtitle: "Don't miss out on the Global opportunity. Maximize your investments with Henriot's Thematic Portfolios.",
		button: {
			label: "Buy",
			action: ""
		},
	},
	featuresContent : {
		left: {
			title: "FX FUND",
			subtitle: "HG-alpha",
			button:""
		},
		right : {
			cards : [
				{
					number: "10%",
					text:"Monthly Returns",
					caption: "Average, based on past performance",
					sideCaption: "",
					info: "Monthly Return (MoM) is average month to month returns since inception",
				},
				{
					text: "Yearly Return",
					number:"220%",
					caption: "Based on past performance average (140-300%)",
					sideCaption: "",
					info: "YTD(year to date). The time period starting from the beginning of the current calender year and continuing up to the current date",
				},
				{
					text: "Quartely Returns",
					number:"65%",
					caption: "May deviate between 30%-100%",
					sideCaption: "",
					info: "Quartely Return (MoM) is average Quartely returns since inception",
				},
				{
					text: "Drawdown",
					number:"30%",
					caption: "Losing months are rare, but floating draw-downs can occur",
					sideCaption: "",
					info: "The highest amount of losses at one particular time",
				},
			],
			button: [
				{
					icon: <BsFileEarmarkSpreadsheetFill style={styledIcon}/>,
					text: "Fact sheet",
					action: ""
				},
				{
					icon: <BsFileEarmarkSpreadsheetFill style={styledIcon}/>,
					text: "Summary Prospectus",
					action: ""
				},
			]
	
		}
	},
	fundsNavigationItems: [
		{
			label: "Overview",
			link: "/landing/exchange#overview",
		},
		{
			label: "Features",
			link: "/landing/exchange#paragraph",
		},
		{
			label: "Perfomance",
			link: "/landing/exchange#perfomance",
		},
		{
			label: "Investment Terms",
			link: "/landing/exchange#terms",
		},
		{
			label: "Documents",
			link: "/landing/exchange#documents",
		},
	],
	overviewItems : [
		{
			title: "Equity",
			text: "$ 0.2mln"
		},
		{
			title: "All Time High",
			text: "280%"
		},
		{
			title: "Max Historic DD",
			text: "35%"
		},
		{
			title: "Yearly Profit",
			text: "135%"
		},
		{
			title: "Targeted Yearly Net",
			text: "100%"
		},
		{
			title: "Acceptable DD",
			text: "40%"
		},
	],
	overViewParagraph: [
		{
			title: "",
			paragraphs: [
				`The HG alpha is an actively managed Forex Fund that seeks long-term growth of capital by investing under normal circumstances primarily (at least 65% of its assets) in major Global currencies across the world. The HG alpha runs a set of sophisticated Algorithms that work simultaneously to yield positive returns.`,
			],
			list: [
				``
			]
		},
		{
			title: "Fund Description",
			paragraphs: [
				`The H-alpha Fund uses an approach that focuses on intra-day, intra-week and sometimes longer timeframes trading to catch longer trends, as well as high impact news trading. With the volatility on the rise, the approach has been so far handling both market swings (New trading) and longer-term upward and downward trends (momentum). The Fund takes into account market structure, and focuses on switching between, momentum and swing trading.`,
			],
			list: [
				`DNA Technologies and the ???Genomic Revolution???`,
				`Automation, Robotics, and Energy Storage`,
				`Artificial Intelligence and the ???Next Generation Internet???`,
				`Fintech Innovation`,
			]
		},
	],
	perfomanceParagraph: [
		`Past performance does not guarantee future results. The performance data quoted represents past performance and current returns may be lower or higher. The investment return and principal will fluctuate so that an investor???s shares when redeemed may be worth more or less than the original cost. Extraordinary performance is attributable in part due to unusually favorable market conditions and may not be repeated or consistently achieved in the future. The Fund???s most recent month-end performance can be found in the fund material section.`,
		`Returns for less than one year are not annualized. Net asset value (???NAV???) returns are based on the dollar value of a single share of the ETF, calculated using the value of the underlying assets of the ETF minus its liabilities, divided by the number of shares outstanding. The NAV is typically calculated at 4:00 pm Eastern time on each business day the New York Stock Exchange is open for trading. Market returns are based on the trade price at which shares are bought and sold on the NYSE Arca, Inc. using the last share trade.`,
		`Market performance does not represent the returns you would receive if you traded shares at other times. Total Return reflects the reinvestment of distributions on ex-date for NAV returns and payment date for Market Price returns. The market price of the ETF???s shares may differ significantly from their NAV during periods of market volatility.`,
	],
	chartData: {
		id: "fx-funds-basic-line-chart",
		categories: [],
		series: [
			{
				name: "Series One",
				data: [
					0.73, 0.72, 1.56, 1.56, 2.36, 2.35, 3.45, 3.44, 4.10, 4.09, 4.91, 4.90, 4.90, 4.89, 6.02, 6.41, 5.97, 5.97, 5.96, 6.83, 7.04, 7.04, 7.03, 7.03, 7.02, 7.82, 8.38, 8.40, 7.74, 7.73, 9.38, 9.37, 11.25, 11.24, 11.24, 11.24, 11.23, 11.23, 11.22, 11.22, 11.22, 13.49, 15.37, 16.83, 17.34, 17.47, 16.92, 11.96, 11.96, 11.95, 11.95, 13.38, 13.38, 13.38, 14.79, 14.79, 14.79, 14.78, 14.78, 14.78, 16.07, 16.40, 16.39, 16.39, 16.39, 16.39, 16.39, 18.02, 18.62, 18.00, 18.00, 19.27, 20.27, 21.80, 22.83, 23.37, 23.39, 22.66, 21.15, 18.18, 18.17, 19.58, 19.58, 20.39, 20.38, 20.38, 21.28, 21.50, 21.50, 22.31, 22.30, 23.71, 23.70, 23.70, 23.69, 25.09, 25.09, 25.08, 25.08, 26.48, 26.48, 26.47, 26.47, 26.47, 26.46, 26.46, 27.89, 27.89, 27.88, 27.88, 27.87, 27.87, 27.87, 29.26, 30.32, 30.33, 28.92, 28.91, 28.91, 34.24, 37.55, 39.30, 39.92, 40.32, 40.69, 40.65, 40.18, 39.24, 37.16, 34.45, 29.99, 29.98, 30.80, 30.80, 30.79, 30.79, 31.66, 31.84, 31.83, 32.67, 32.67, 32.66, 32.66, 33.82, 34.24, 33.80, 33.79, 34.53, 34.53, 34.52, 36.15, 36.74, 36.15, 36.14, 36.14, 36.14, 36.13, 36.13, 36.13, 36.12, 37.60, 38.68, 39.36, 39.65, 39.47, 38.67, 36.84, 36.84, 37.69, 37.69, 39.00, 39.36, 39.36, 39.35, 39.35, 40.73, 40.73, 40.73, 41.54, 42.18, 42.22, 41.52, 41.51, 41.51, 41.50, 42.42, 42.65, 42.64, 42.63, 42.63, 42.62, 42.62, 42.62, 43.90, 44.80, 45.28, 45.38, 44.81, 43.22, 43.22, 43.21, 43.21, 43.20, 43.20, 44.50, 44.82, 44.81, 44.81, 44.80, 44.80, 46.18, 46.18, 47.51, 47.51, 48.45, 49.89, 50.90, 51.47, 51.63, 51.20, 50.08, 47.80, 47.79, 47.79, 47.78, 47.78, 47.78, 47.77, 47.77, 47.77, 47.76, 47.76, 47.76, 49.96, 51.50, 52.34, 52.50, 51.64, 49.09, 49.09, 50.51, 50.50, 50.50, 51.86, 51.85, 51.85, 51.85, 51.85, 51.84, 51.84, 51.84, 51.83, 51.83, 51.82, 53.22, 54.22, 54.20, 52.77, 52.77, 52.76, 54.17, 54.17, 55.56, 55.55, 56.96, 56.96, 56.95, 56.95, 56.95, 58.37, 59.47, 59.49, 58.02, 58.02, 59.43, 59.42, 59.42, 60.72, 61.02, 61.01, 61.01, 61.01, 61.01, 61.01, 61.00, 63.04, 64.36, 64.98, 65.22, 64.41, 61.96, 61.95, 63.34, 63.33, 63.33, 64.63, 64.99, 64.98, 64.98, 64.98, 64.97, 64.70, 64.69, 64.01, 64.00, 63.24, 63.24, 64.74, 66.03, 66.36, 66.36, 67.78, 67.78, 66.90, 66.89, 65.83, 65.82, 64.44, 65.85, 65.85, 65.85, 67.15, 67.48, 67.48, 67.48, 67.48, 67.47, 67.47
					]
			}
		]
	},
	fundsParagraph : [
		`The Fund comprises multiple and diverse trading drivers, with each driver aiming to exploit different market opportunities and inefficiencies in the global FX market. By building a portfolio of diverse FX trading strategies, we are able to diversify our risk allocation within the G10 space and regulate our capital drawdown, generate consistent and sustainable returns for the long run.`,
		`Our absolute strategies yield returns uncorrelated to conventional asset classes. We use??algorithms in our trade execution to help us trade the FX market efficiently. The use of algorithms eliminates human failings by providing a systematic and risk-disciplined approach in trade execution, optimizing speed and scale for the Fund.`,
		`The Fund aims to deliver absolute positive yearly returns in all market conditions. Each of the constituent drivers in the portfolio trades on different factors and dimensions. This allows us to benefit from the various profit factors of the drivers and helps in diversifying our risk exposure and in regulating the overall drawdown.`,
		`Our experience in this industry is that a single strategy is not scalable in the long run without running into capacity and depth of market issues. By incorporating multiple diverse strategies into a portfolio, we are able to scale sustainably and deliver quality risk-adjusted returns for our clients.We believe this approach will enable a consistent and sustainable growth of capital in the long run and delivers the best client experience across market cycles.`,
	],
	documentButtons: [
		{
			label: "Fact Sheet",
			action: "",
			path:""
		},
		{
			label: "Investment Case",
			action: "",
			path: FundsInvestmentCase
		},
		{
			label: "Summary Prospectus",
			action: "",
			path: SummaryProspectus
		},
		{
			label: "Fund Holdings CSV",
			action: "",
			path: FundsHoldingCSV
		},
		{
			label: "Quaterly Report",
			action: "",
			path: ""
		},
		{
			label: "Fund Holdings PDF",
			action: "",
			path: FundsHoldingPDF
		},
	],

}

export const CECfundsItem = {
	bannerItems : {
		videoLink: "https://res.cloudinary.com/dqweh6zte/video/upload/v1677590537/henriot/video_1_so3cbi.mp4",
		title: "COMMODITIES, EQUITIES, CRYPTOCURRENCIES (EC) FUNDC",
		subtitle: "Don't miss out on the Global opportunity. Maximize your investments with Henriot's Thematic Portfolios.",
		button: {
			label: "Buy",
			action: ""
		},
	},
	featuresContent : {
		left: {
			title: "Text title Here",
			subtitle: "A subtitle here",
			button:""
		},
		right : {
			cards : [
				{
					number: "$100,000",
					text:"Assets Under Management",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
				{
					text: "YTD Return",
					number:"27.6%",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
				{
					text: "Since Inception",
					number:"356%",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
				{
					text: "Trailing 12 Months",
					number:"40.1%",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
			],
			button: [
				{
					icon: <BsFileEarmarkSpreadsheetFill style={styledIcon}/>,
					text: "Fact sheet",
					action: ""
				},
				{
					icon: <BsFileEarmarkSpreadsheetFill style={styledIcon}/>,
					text: "Summary Prospectus",
					action: ""
				},
			]
	
		}
	},
	fundsNavigationItems: [
		{
			label: "Overview",
			link: "",
		},
		{
			label: "Features",
			link: "",
		},
		{
			label: "Perfomance",
			link: "",
		},
		{
			label: "Investment Terms",
			link: "",
		},
		{
			label: "Documents",
			link: "",
		},
	],
	overviewItems : [
		{
			title: "Private Benchmark Index",
			text: "ACMTFX"
		},
		{
			title: "AUM",
			text: "$10,931,577.40"
		},
		{
			title: "Instruments",
			text: "21"
		},
		{
			title: "Average Position Period",
			text: "12 Months"
		},
		{
			title: "Inception Date",
			text: "13/03/18"
		},
	],
	fundsParagraph : [
		`The Fund comprises multiple and diverse trading drivers, with each driver aiming to exploit different market opportunities and inefficiencies in the global FX market. By building a portfolio of diverse FX trading strategies, we are able to diversify our risk allocation within the G10 space and regulate our capital drawdown, generate consistent and sustainable returns for the long run.`,
		`Our absolute strategies yield returns uncorrelated to conventional asset classes. We use??algorithms in our trade execution to help us trade the FX market efficiently. The use of algorithms eliminates human failings by providing a systematic and risk-disciplined approach in trade execution, optimizing speed and scale for the Fund.`,
		`The Fund aims to deliver absolute positive yearly returns in all market conditions. Each of the constituent drivers in the portfolio trades on different factors and dimensions. This allows us to benefit from the various profit factors of the drivers and helps in diversifying our risk exposure and in regulating the overall drawdown.`,
		`Our experience in this industry is that a single strategy is not scalable in the long run without running into capacity and depth of market issues. By incorporating multiple diverse strategies into a portfolio, we are able to scale sustainably and deliver quality risk-adjusted returns for our clients.We believe this approach will enable a consistent and sustainable growth of capital in the long run and delivers the best client experience across market cycles.`,
	],
	documentButtons: [
		{
			label: "Fact Sheet",
			action: ""
		},
		{
			label: "Investment Case",
			action: ""
		},
		{
			label: "Summary Prospectus",
			action: ""
		},
		{
			label: "Fund Holdings CSV",
			action: ""
		},
		{
			label: "Quaterly Report",
			action: ""
		},
		{
			label: "Fund Holdings PDF",
			action: ""
		},
	],
	chartData: {
		id: "CEC-funds-basic-line-chart",
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
		series: [
			{
				name: "Series One",
				data: [30, 40, 45, 50, 49, 60, 70, 91]
			}
		]
	}
}

export const diverseFundsItem = {
	bannerItems : {
		videoLink: "https://res.cloudinary.com/dqweh6zte/video/upload/v1677590578/henriot/video_2_keqqhu.mp4",
		title: "DIVERSE FUNDS",
		subtitle: "Don't miss out on the Global opportunity. Maximize your investments with Henriot's Thematic Portfolios.",
		button: {
			label: "Buy",
			action: ""
		},
	},
	featuresContent : {
		left: {
			title: "Text title Here",
			subtitle: "A subtitle here",
			button:""
		},
		right : {
			cards : [
				{
					number: "$100,000",
					text:"Assets Under Management",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
				{
					text: "YTD Return",
					number:"27.6%",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
				{
					text: "Since Inception",
					number:"356%",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
				{
					text: "Trailing 12 Months",
					number:"40.1%",
					caption: "A caption here",
					sideCaption: "",
					info: "Some important info here",
				},
			],
			button: [
				{
					icon: <BsFileEarmarkSpreadsheetFill style={styledIcon}/>,
					text: "Fact sheet",
					action: ""
				},
				{
					icon: <BsFileEarmarkSpreadsheetFill style={styledIcon}/>,
					text: "Summary Prospectus",
					action: ""
				},
			]
	
		}
	},
	fundsNavigationItems: [
		{
			label: "Overview",
			link: "",
		},
		{
			label: "Features",
			link: "",
		},
		{
			label: "Perfomance",
			link: "",
		},
		{
			label: "Investment Terms",
			link: "",
		},
		{
			label: "Documents",
			link: "",
		},
	],
	overviewItems : [
		{
			title: "Private Benchmark Index",
			text: "ACMTFX"
		},
		{
			title: "AUM",
			text: "$10,931,577.40"
		},
		{
			title: "Instruments",
			text: "21"
		},
		{
			title: "Average Position Period",
			text: "12 Months"
		},
		{
			title: "Inception Date",
			text: "12/03/16"
		},
	],
	fundsParagraph : [
		`The Fund comprises multiple and diverse trading drivers, with each driver aiming to exploit different market opportunities and inefficiencies in the global FX market. By building a portfolio of diverse FX trading strategies, we are able to diversify our risk allocation within the G10 space and regulate our capital drawdown, generate consistent and sustainable returns for the long run.`,
		`Our absolute strategies yield returns uncorrelated to conventional asset classes. We use??algorithms in our trade execution to help us trade the FX market efficiently. The use of algorithms eliminates human failings by providing a systematic and risk-disciplined approach in trade execution, optimizing speed and scale for the Fund.`,
		`The Fund aims to deliver absolute positive yearly returns in all market conditions. Each of the constituent drivers in the portfolio trades on different factors and dimensions. This allows us to benefit from the various profit factors of the drivers and helps in diversifying our risk exposure and in regulating the overall drawdown.`,
		`Our experience in this industry is that a single strategy is not scalable in the long run without running into capacity and depth of market issues. By incorporating multiple diverse strategies into a portfolio, we are able to scale sustainably and deliver quality risk-adjusted returns for our clients.We believe this approach will enable a consistent and sustainable growth of capital in the long run and delivers the best client experience across market cycles.`,
	],
	documentButtons: [
		{
			label: "Fact Sheet",
			action: ""
		},
		{
			label: "Investment Case",
			action: ""
		},
		{
			label: "Summary Prospectus",
			action: ""
		},
		{
			label: "Fund Holdings CSV",
			action: ""
		},
		{
			label: "Quaterly Report",
			action: ""
		},
		{
			label: "Fund Holdings PDF",
			action: ""
		},
	],
	chartData: {
		id: "diverse-funds-basic-line-chart",
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
		series: [
			{
				name: "Series One",
				data: [30, 40, 45, 50, 49, 60, 70, 91]
			}
		]
	}
}
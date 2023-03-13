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
				`DNA Technologies and the “Genomic Revolution”`,
				`Automation, Robotics, and Energy Storage`,
				`Artificial Intelligence and the “Next Generation Internet”`,
				`Fintech Innovation`,
			]
		},
	],
	perfomanceParagraph: [
		`Past performance does not guarantee future results. The performance data quoted represents past performance and current returns may be lower or higher. The investment return and principal will fluctuate so that an investor’s shares when redeemed may be worth more or less than the original cost. Extraordinary performance is attributable in part due to unusually favorable market conditions and may not be repeated or consistently achieved in the future. The Fund’s most recent month-end performance can be found in the fund material section.`,
		`Returns for less than one year are not annualized. Net asset value (“NAV”) returns are based on the dollar value of a single share of the ETF, calculated using the value of the underlying assets of the ETF minus its liabilities, divided by the number of shares outstanding. The NAV is typically calculated at 4:00 pm Eastern time on each business day the New York Stock Exchange is open for trading. Market returns are based on the trade price at which shares are bought and sold on the NYSE Arca, Inc. using the last share trade.`,
		`Market performance does not represent the returns you would receive if you traded shares at other times. Total Return reflects the reinvestment of distributions on ex-date for NAV returns and payment date for Market Price returns. The market price of the ETF’s shares may differ significantly from their NAV during periods of market volatility.`,
	],
	chartData: {
		id: "fx-funds-basic-line-chart",
		categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
		series: [
			{
				name: "Series One",
				data: [30, 40, 45, 50, 49, 60, 70, 91]
			}
		]
	},
	fundsParagraph : [
		`The Fund comprises multiple and diverse trading drivers, with each driver aiming to exploit different market opportunities and inefficiencies in the global FX market. By building a portfolio of diverse FX trading strategies, we are able to diversify our risk allocation within the G10 space and regulate our capital drawdown, generate consistent and sustainable returns for the long run.`,
		`Our absolute strategies yield returns uncorrelated to conventional asset classes. We use algorithms in our trade execution to help us trade the FX market efficiently. The use of algorithms eliminates human failings by providing a systematic and risk-disciplined approach in trade execution, optimizing speed and scale for the Fund.`,
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
		`Our absolute strategies yield returns uncorrelated to conventional asset classes. We use algorithms in our trade execution to help us trade the FX market efficiently. The use of algorithms eliminates human failings by providing a systematic and risk-disciplined approach in trade execution, optimizing speed and scale for the Fund.`,
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
		`Our absolute strategies yield returns uncorrelated to conventional asset classes. We use algorithms in our trade execution to help us trade the FX market efficiently. The use of algorithms eliminates human failings by providing a systematic and risk-disciplined approach in trade execution, optimizing speed and scale for the Fund.`,
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
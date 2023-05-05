import { investmentEquityData } from "../../pages/investment/equities/info"
import { investmentForexData } from "../../pages/investment/forex/info"

export const navItems = [
	{
		label: "home",
		path: "/landing/main",
	},
	{
		label: "foreign exchange funds",
		path: "/landing/exchange",
	},
	{
		label: "cec funds",
		path: "/landing/cec",
	},
	{
		label: "diverse funds",
		path: "/landing/diverse",
	},
	{
		label: "news",
		path: "/landing/resources/news",
	},
	{
		label: "contact",
		path: "/landing/contact",
	},
]

export const menuItems = [
	{
		label: "Our Quant Funds",
		navItems: [
			{
				label: "FX Fund",
				link:"/landing/exchange",
				children : [
					{
						label: "Overview",
						link: "/landing/exchange#overview"
					},
					{
						label: "Features",
						link: "/landing/exchange#paragraph"
					},
					{
						label: "Performance",
						link: "/landing/exchange#perfomance"
					},
					{
						label: "Investment Terms",
						link: "/landing/exchange#terms"
					},
					{
						label: "Documents",
						link: "/landing/exchange#documents"
					},
				]
			},
			{
				label: "CEC Fund",
				link:"/landing/cec",
				children : [
					{
						label: "Overview",
						link: "/landing/cec#overview"
					},
					{
						label: "Features",
						link: "/landing/cec#paragraph"
					},
					{
						label: "Performance",
						link: "/landing/cec#perfomance"
					},
					{
						label: "Investment Terms",
						link: "/landing/cec#terms"
					},
					{
						label: "Documents",
						link: "/landing/cec#documents"
					},
				]
			},
			{
				label: "Diverse Fund",
				link:"/landing/diverse",
				children : [
					{
						label: "Overview",
						link: "/landing/diverse#overview"
					},
					{
						label: "Features",
						link: "/landing/diverse#paragraph"
					},
					{
						label: "Performance",
						link: "/landing/diverse#perfomance"
					},
					{
						label: "Investment Terms",
						link: "/landing/diverse#terms"
					},
					{
						label: "Documents",
						link: "/landing/diverse#documents"
					},
				]
			},
		]
	},
	{
		label: "Investment Solutions",
		navItems: [
			{
				label: "Forex",
				link:"/landing/investment-solutions/forex",
				buttonAction: true,
				children: [
					{
						label: "HG Delta",
						value: "hgDelta",
						reduxValue: investmentForexData.hgDelta
					},
					{
						label: "HG Alpha",
						value: "hgAlpha",
						reduxValue: investmentForexData.hgAlpha
					},
					{
						label: "HG Beta",
						value: "hgBeta",
						reduxValue: investmentForexData.hgBeta
					},
					{
						label: "HG Gamma",
						value: "hgGamma",
						reduxValue: investmentForexData.hgGamma
					},
					{
						label: "HG Sigma",
						value: "hgSigma",
						reduxValue: investmentForexData.hgSigma
					},
				]
			},
			{
				label: "Equities",
				buttonAction: true,
				link:"/landing/investment-solutions/equity",
				children: [
					{
						label: "Market disruptor",
						value: "market-disruptor",
						reduxValue: investmentEquityData.marketDisruptor
					},
					{
						label: "DNA game-changer",
						value: "dna-game-changer",
						reduxValue: investmentEquityData.dnaGameChanger
					},
					{
						label: "Finance frontier",
						value: "finance-frontier",
						reduxValue: investmentEquityData.financeFrontier
					},
					{
						label: "Future fabrication",
						value: "future-fabrication",
						reduxValue: investmentEquityData.futureFabrication
					},
					{
						label: "Crypto craze",
						value: "crypto-craze",
						reduxValue: investmentEquityData.cryptoCraze
					},
					{
						label: "Augmented reality",
						value: "augmented-reality",
						reduxValue: investmentEquityData.augmentedReality
					},
					{
						label: "Decentralized web 3.0",
						value: "decentralized-web-3.0",
						reduxValue: investmentEquityData.decentralizedWeb3
					},
					{
						label: "Intelligent machines",
						value: "intelligent-machines",
						reduxValue: investmentEquityData.intelligentMachine
					},
					{
						label: "Galactic adventure",
						value: "galactic-adventure",
						reduxValue: investmentEquityData.galacticAdventure
					},
					{
						label: "Silicon Wadi",
						value: "silicon-wadi",
						reduxValue: investmentEquityData.siliconWadi
					},
					{
						label: "Digital gold",
						value: "digital-gold",
						reduxValue: investmentEquityData.digitalGold
					},
					{
						label: "Future unicorns",
						value: "future-unicorns",
						reduxValue: investmentEquityData.futureUnicorns
					},
					{
						label: "On-demand mobility",
						value: "on-demand-mobility",
						reduxValue: investmentEquityData.onDemandMobility
					},
					{
						label: "Sustainable investment",
						value: "sustainable-investment",
						reduxValue: investmentEquityData.sustainableInvestment
					},
				]
			},
			{
				label: "Structured Products",
				link:"/landing/investment-solutions/structures-products"
			},
			{
				label: "Portfolios",
				link:"/landing/investment-solutions/portfolios"
			},
		]
	},
	{
		label: "Resources",
		navItems: [
			{
				label: "News",
				link:"/landing/resources/news"
			},
			{
				label: "Research",
				link:"/landing/resources/research"
			},
			{
				label: "Learn",
				link:"/landing/resources/learn"
			},
		]
	},
	{
		label: "Company",
		navItems: [
			{
				label: "Overview",
				link:"/landing/resources/news"
			},
			{
				label: "Careers",
				link:"/landing/resources/news"
			},
			{
				label: "FAQ",
				link:"/landing/resources/news"
			},
		]
	},
]

export const drawerMenuItems = {
	top: [
		{
			label: "Our Quant Funds",
			navItems: [
				{
					label: "FX Fund",
					link:"/landing/exchange"
				},
				{
					label: "CEC Fund",
					link:"/landing/cec"
				},
				{
					label: "Diverse Fund",
					link:"/landing/diverse"
				},
			]
		},
		{
			label: "Investment Solutions",
			navItems: [
				{
					label: "Forex",
					link:"/landing/investment-solutions/forex"
				},
				{
					label: "Equities",
					link:"/landing/investment-solutions/equity"
				},
				{
					label: "Structured Products",
					link:"/landing/investment-solutions/structures-products"
				},
				{
					label: "Portfolios",
					link:"/landing/investment-solutions/portfolios"
				},
			]
		},
		{
			label: "Resources",
			navItems: [
				{
					label: "News",
					link:"/landing/resources/news"
				},
				{
					label: "Research",
					link:"/landing/resources/news"
				},
				{
					label: "Learn",
					link:"/landing/resources/news"
				},
			]
		},
		{
			label: "Company",
			navItems: [
				{
					label: "Overview",
					link:"/landing/company/overview"
				},
				{
					label: "Careers",
					link:"/landing/company/faq"
				},
				{
					label: "FAQ",
					link:"/landing/company/careers"
				},
			]
		},
	],
	bottom: [
		{
			label: "Login",
			link: ""
		},
		{
			label: "Register",
			link: ""
		},
	]
}
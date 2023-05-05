import { BsXLg, BsFillEmojiSmileFill, BsShieldLock, BsFileEarmarkText } from "react-icons/bs";
import { FaCheck, FaInfoCircle, FaQuestion } from "react-icons/fa";
import { CgArrowLongUp, CgHome } from "react-icons/cg";
import { FiSliders } from "react-icons/fi";
import { FcNeutralTrading, FcBullish, FcCollaboration, FcHome, FcManager, FcBusinessman,    } from "react-icons/fc"

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733726/henriot/pexels-pok-rie-5807886_laufb3.jpg"

const styledIcon = {}

const styledFeaturesIcon = {
	fontSize: "25px",
	fontWeight: 800
};

const coloredIconStyles ={
	fontSize: "25px"
}

const largerColoredIconStyles ={
	fontSize: "30px"
}

const reviewIconStyles = {
	fontSize: "50px"
}

export const investmentForexData = {
	hgDelta: {
		banner: {
			boldTitle: "1-10% Monthly delta",
			title: "Explosive account growth with an MT4 EA automated system.",
			caption: `Risk Warning: Remember financial trading is highly speculative & may lead to the loss of your funds.`,
			captionTwo: "Verified by:",
			verifier: "myFxBook",
			video: "https://res.cloudinary.com/dqweh6zte/video/upload/v1681212645/henriot/pexels-pressmaster-3130182-3840x2160-30fps_zigaup.mp4",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			button: {
				action: () => {console.log("Hello there")},
				label: "Pricing"
			}
		},
		features: {
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			content: [
				{
					title: "Consistent Returns",
					icon: <CgArrowLongUp style={styledFeaturesIcon}/>,
					text: "Remarkable 5-25% monthly returns based on 2+ years of live trading."
				},
				{
					title: "Rental & Managed",
					icon: <CgHome style={styledFeaturesIcon}/>,
					text: "Trade on your account or invest in a managed account at €0 upfront cost."
				},
				{
					title: "Sit Back & Relax",
					icon: <BsFillEmojiSmileFill style={styledFeaturesIcon}/>,
					text: "No previous experience with MT4 EAs required for neither rental nor managed accounts."
				},
				{
					title: "Risk Management",
					icon: <BsShieldLock style={styledFeaturesIcon}/>,
					text: "By playing with risk levels, you can increase/decrease a profitability factor."
				},
				{
					title: "Reporting & Transparency",
					icon: <BsFileEarmarkText style={styledFeaturesIcon}/>,
					text: "No hidden fees, clear reporting and full verification via Myfxbook."
				},
				{
					title: "Full Capital Control",
					icon: <FiSliders style={styledFeaturesIcon}/>,
					text: `No "freezing the capital", withdraw profits or top up your account at any moment.`
				},
			],
			cardGroup: [
				{
					number: "15%",
					title: "Monthly Returns",
					text: "Average, based on past performance (8-25%)."
				},
				{
					number: "65%",
					title: "Quarterly Returns",
					text: "May deviate between 30%-100%"
				},
				{
					number: "220%",
					title: "Yearly Returns",
					text: "Based on past performance average (140-300%)."
				},
				{
					number: "30%",
					title: "Drawdown",
					text: "Losing months are rare, but floating draw-downs can occur."
				},
			]
		},
		whatIs: {
			title: "What’s HG-delta EA?",
			subtitle: "Grid-trading algorithm with a specific approach to Take Profit that aims to never close a day at a loss.",
			lists: [
				{
					title: "Includes:",
					items: [
						"EA Installer",
						"Setup Handouts",
						"Access to Reporting & Maintenance",
						"FAQ & Support",
					]
				},
				{
					title: "EA Basics:",
					items: [
						"Trades price swings and price action",
						"Elegant implementation of a classical equation",
						"Moving averages and oscillators are added for exits and targets",
						"Transitional draw-downs can sometimes be visible via an intra-day (or intra-week) chart.",
					]
				},
			],
			creators: [
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
			],
			graph: [
				{
					height: "500px",
					title: "Year",
					number: "220%"
				},
				{
					height: "100px",
					title: "Month",
					number: "18%"
				},
			],
			presentRecord: image
		},
		threeContent: [
			{
				icon: <FcNeutralTrading style={coloredIconStyles}/>,
				title: "$5k Makes $5,6k in a Year",
				text: "Balance comouding (no profit withdrawing) and personal money management principles (removing some profits)."
			},
			{
				icon: <FcBullish style={coloredIconStyles}/>,
				title: "Funding & Onboarding",
				text: "Fast-track KYC via a supported broker with no capital restrictions and flexible top-up options."
			},
			{
				icon: <FcCollaboration style={coloredIconStyles}/>,
				title: "Installation Support",
				text: "You are getting a free installation support, plus we are always online."
			},
		],
		twoContent: [
			{
				icon: <FcHome style={largerColoredIconStyles}/>,
				title: "Rental",
				text: "You’ll just need to have an account with a broker ready and install the EA on a VPS and supporting it throughout the investment cycles. This approach works best with above €4,000 (for under €4,000 ask broker for a cent account).",
				button: {
					label: "Onboarding Instructions"
				}
			},
			{
				icon: <FcManager  style={largerColoredIconStyles}/>,
				title: "Managed Account",
				text: "A broker technology allows you to join in via a trusted environment without bothering about installation files and MetaTrader as a whole. Best for investors looking for a hands-off approach with as low as €400.",
				button: {
					label: "Onboarding Instructions"
				}
			}
		],
		pricing: {
			items: [
				{
					top: {
						topLabel: "Lifetime",
						number: "€999",
						bottomLabel: "One-time Payment",
						text: "A personal copy of the EA with complete access to all settings.",
						button: {
							label: "Order Now"
						}
					},
					duration: "Lifetime",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram: "In development"
				},
				{
					top: {
						topLabel: "Rental Sponsored",
						number: "€699",
						bottomLabel: "Recurring Yearly",
						text: "Quick onboading and no capital limits.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
				{
					top: {
						topLabel: "Profit Share",
						number: "€0",
						bottomLabel: "€0 Upfront Fees",
						text: "Requires a supported broker account.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: "25-35%",
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
			],
			footNote: {
				icon: <FaInfoCircle style={styledIcon}/>,
				text: "Sponsored version requires supported broker account"
			}
		},
		profitShare: {
			table: {
				head: [
					"Net Capital",
					"Profit Sharing",
				],
				body: [
					{
						key: "$400",
						value: "35%"
					},
					{
						key: "$800",
						value: "30%"
					},
					{
						key: "$5000",
						value: "25%"
					},
					{
						key: "$15000",
						value: "20%"
					},
				],
			},
			additionalContent: [
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 30%",
					caption: "Saves you 12% profit a Year"
				},
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 25%",
					caption: "Saves you 24% profit a Year"
				},
			]
		},
		brokerAccount: {
			cards : [
				{
					image: image,
					title: "XM Global",
					stars: 3.4,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
				{
					image: image,
					title: "VT Global",
					stars: 4.5,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
			],
			join: {
				steps: [
					{
						title: "Broker Account",
						text: "Open & verify an account with a supported broker."
					},
					{
						title: "Deposit Funds",
						text: "Fund any USD denominated account with at least $500."
					},
					{
						title: "Join our PAMM",
						text: "Find a link within the instructions below."
					},
				],
				footnote: {
					icon: <FaInfoCircle/>,
					text: "Detailed onboarding for rental and managed accounts."
				}
			},
			bottom: {
				icon: <FaInfoCircle/>,
				title: "Why Trusted Broker?",
				text: "Running Expert Advisors at this level of operations incurs R&D, Customer Support, Marketing costs, which we partly cover with spread-based rebates provided by a broker. This agreement does not impact the performance of the Managed Account."
			}
		},
		calculator: {
			left: {
				title: "Calculate your expected profit with Portfolio HG-Delta",
				items: [
					{
						key: "Average Profit Per Month",
						value: 14,
						tooltip: "Some important information here"
					},
					{
						key: "Possible DD",
						value: 33,
						tooltip: "Some important information here"
					},
				],
			}
		},
		reviews: [
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 1",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 2",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 3",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 4",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 5",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
		],
		faq: [
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
		]
	},
	hgAlpha: {
		banner: {
			boldTitle: "1-10% Monthly",
			title: "Explosive account growth with an MT4 EA automated system.",
			caption: `Risk Warning: Remember financial trading is highly speculative & may lead to the loss of your funds.`,
			captionTwo: "Verified by:",
			verifier: "myFxBook",
			video: "https://res.cloudinary.com/dqweh6zte/video/upload/v1681212645/henriot/pexels-pressmaster-3130182-3840x2160-30fps_zigaup.mp4",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			button: {
				action: () => {console.log("Hello there")},
				label: "Pricing"
			}
		},
		features: {
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			content: [
				{
					title: "Consistent Returns",
					icon: <CgArrowLongUp style={styledFeaturesIcon}/>,
					text: "Remarkable 5-25% monthly returns based on 2+ years of live trading."
				},
				{
					title: "Rental & Managed",
					icon: <CgHome style={styledFeaturesIcon}/>,
					text: "Trade on your account or invest in a managed account at €0 upfront cost."
				},
				{
					title: "Sit Back & Relax",
					icon: <BsFillEmojiSmileFill style={styledFeaturesIcon}/>,
					text: "No previous experience with MT4 EAs required for neither rental nor managed accounts."
				},
				{
					title: "Risk Management",
					icon: <BsShieldLock style={styledFeaturesIcon}/>,
					text: "By playing with risk levels, you can increase/decrease a profitability factor."
				},
				{
					title: "Reporting & Transparency",
					icon: <BsFileEarmarkText style={styledFeaturesIcon}/>,
					text: "No hidden fees, clear reporting and full verification via Myfxbook."
				},
				{
					title: "Full Capital Control",
					icon: <FiSliders style={styledFeaturesIcon}/>,
					text: `No "freezing the capital", withdraw profits or top up your account at any moment.`
				},
			],
			cardGroup: [
				{
					number: "15%",
					title: "Monthly Returns",
					text: "Average, based on past performance (8-25%)."
				},
				{
					number: "65%",
					title: "Quarterly Returns",
					text: "May deviate between 30%-100%"
				},
				{
					number: "220%",
					title: "Yearly Returns",
					text: "Based on past performance average (140-300%)."
				},
				{
					number: "30%",
					title: "Drawdown",
					text: "Losing months are rare, but floating draw-downs can occur."
				},
			]
		},
		whatIs: {
			title: "What’s HG-delta EA?",
			subtitle: "Grid-trading algorithm with a specific approach to Take Profit that aims to never close a day at a loss.",
			lists: [
				{
					title: "Includes:",
					items: [
						"EA Installer",
						"Setup Handouts",
						"Access to Reporting & Maintenance",
						"FAQ & Support",
					]
				},
				{
					title: "EA Basics:",
					items: [
						"Trades price swings and price action",
						"Elegant implementation of a classical equation",
						"Moving averages and oscillators are added for exits and targets",
						"Transitional draw-downs can sometimes be visible via an intra-day (or intra-week) chart.",
					]
				},
			],
			creators: [
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
			],
			graph: [
				{
					height: "500px",
					title: "Year",
					number: "220%"
				},
				{
					height: "100px",
					title: "Month",
					number: "18%"
				},
			],
			presentRecord: image
		},
		threeContent: [
			{
				icon: <FcNeutralTrading style={coloredIconStyles}/>,
				title: "$5k Makes $5,6k in a Year",
				text: "Balance comouding (no profit withdrawing) and personal money management principles (removing some profits)."
			},
			{
				icon: <FcBullish style={coloredIconStyles}/>,
				title: "Funding & Onboarding",
				text: "Fast-track KYC via a supported broker with no capital restrictions and flexible top-up options."
			},
			{
				icon: <FcCollaboration style={coloredIconStyles}/>,
				title: "Installation Support",
				text: "You are getting a free installation support, plus we are always online."
			},
		],
		twoContent: [
			{
				icon: <FcHome style={largerColoredIconStyles}/>,
				title: "Rental",
				text: "You’ll just need to have an account with a broker ready and install the EA on a VPS and supporting it throughout the investment cycles. This approach works best with above €4,000 (for under €4,000 ask broker for a cent account).",
				button: {
					label: "Onboarding Instructions"
				}
			},
			{
				icon: <FcManager  style={largerColoredIconStyles}/>,
				title: "Managed Account",
				text: "A broker technology allows you to join in via a trusted environment without bothering about installation files and MetaTrader as a whole. Best for investors looking for a hands-off approach with as low as €400.",
				button: {
					label: "Onboarding Instructions"
				}
			}
		],
		pricing: {
			items: [
				{
					top: {
						topLabel: "Lifetime",
						number: "€999",
						bottomLabel: "One-time Payment",
						text: "A personal copy of the EA with complete access to all settings.",
						button: {
							label: "Order Now"
						}
					},
					duration: "Lifetime",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram: "In development"
				},
				{
					top: {
						topLabel: "Rental Sponsored",
						number: "€699",
						bottomLabel: "Recurring Yearly",
						text: "Quick onboading and no capital limits.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
				{
					top: {
						topLabel: "Profit Share",
						number: "€0",
						bottomLabel: "€0 Upfront Fees",
						text: "Requires a supported broker account.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: "25-35%",
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
			],
			footNote: {
				icon: <FaInfoCircle style={styledIcon}/>,
				text: "Sponsored version requires supported broker account"
			}
		},
		profitShare: {
			table: {
				head: [
					"Net Capital",
					"Profit Sharing",
				],
				body: [
					{
						key: "$400",
						value: "35%"
					},
					{
						key: "$800",
						value: "30%"
					},
					{
						key: "$5000",
						value: "25%"
					},
					{
						key: "$15000",
						value: "20%"
					},
				],
			},
			additionalContent: [
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 30%",
					caption: "Saves you 12% profit a Year"
				},
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 25%",
					caption: "Saves you 24% profit a Year"
				},
			]
		},
		brokerAccount: {
			cards : [
				{
					image: image,
					title: "XM Global",
					stars: 3.4,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
				{
					image: image,
					title: "VT Global",
					stars: 4.5,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
			],
			join: {
				steps: [
					{
						title: "Broker Account",
						text: "Open & verify an account with a supported broker."
					},
					{
						title: "Deposit Funds",
						text: "Fund any USD denominated account with at least $500."
					},
					{
						title: "Join our PAMM",
						text: "Find a link within the instructions below."
					},
				],
				footnote: {
					icon: <FaInfoCircle/>,
					text: "Detailed onboarding for rental and managed accounts."
				}
			},
			bottom: {
				icon: <FaInfoCircle/>,
				title: "Why Trusted Broker?",
				text: "Running Expert Advisors at this level of operations incurs R&D, Customer Support, Marketing costs, which we partly cover with spread-based rebates provided by a broker. This agreement does not impact the performance of the Managed Account."
			}
		},
		calculator: {
			left: {
				title: "Calculate your expected profit with Portfolio HG-Delta",
				items: [
					{
						key: "Average Profit Per Month",
						value: 14,
						tooltip: "Some important information here"
					},
					{
						key: "Possible DD",
						value: 33,
						tooltip: "Some important information here"
					},
				],
			}
		},
		reviews: [
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 1",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 2",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 3",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 4",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 5",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
		],
		faq: [
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
		]
	},
	hgBeta: {
		banner: {
			boldTitle: "1-10% Monthly",
			title: "Explosive account growth with an MT4 EA automated system.",
			caption: `Risk Warning: Remember financial trading is highly speculative & may lead to the loss of your funds.`,
			captionTwo: "Verified by:",
			verifier: "myFxBook",
			video: "https://res.cloudinary.com/dqweh6zte/video/upload/v1681212645/henriot/pexels-pressmaster-3130182-3840x2160-30fps_zigaup.mp4",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			button: {
				action: () => {console.log("Hello there")},
				label: "Pricing"
			}
		},
		features: {
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			content: [
				{
					title: "Consistent Returns",
					icon: <CgArrowLongUp style={styledFeaturesIcon}/>,
					text: "Remarkable 5-25% monthly returns based on 2+ years of live trading."
				},
				{
					title: "Rental & Managed",
					icon: <CgHome style={styledFeaturesIcon}/>,
					text: "Trade on your account or invest in a managed account at €0 upfront cost."
				},
				{
					title: "Sit Back & Relax",
					icon: <BsFillEmojiSmileFill style={styledFeaturesIcon}/>,
					text: "No previous experience with MT4 EAs required for neither rental nor managed accounts."
				},
				{
					title: "Risk Management",
					icon: <BsShieldLock style={styledFeaturesIcon}/>,
					text: "By playing with risk levels, you can increase/decrease a profitability factor."
				},
				{
					title: "Reporting & Transparency",
					icon: <BsFileEarmarkText style={styledFeaturesIcon}/>,
					text: "No hidden fees, clear reporting and full verification via Myfxbook."
				},
				{
					title: "Full Capital Control",
					icon: <FiSliders style={styledFeaturesIcon}/>,
					text: `No "freezing the capital", withdraw profits or top up your account at any moment.`
				},
			],
			cardGroup: [
				{
					number: "15%",
					title: "Monthly Returns",
					text: "Average, based on past performance (8-25%)."
				},
				{
					number: "65%",
					title: "Quarterly Returns",
					text: "May deviate between 30%-100%"
				},
				{
					number: "220%",
					title: "Yearly Returns",
					text: "Based on past performance average (140-300%)."
				},
				{
					number: "30%",
					title: "Drawdown",
					text: "Losing months are rare, but floating draw-downs can occur."
				},
			]
		},
		whatIs: {
			title: "What’s HG-delta EA?",
			subtitle: "Grid-trading algorithm with a specific approach to Take Profit that aims to never close a day at a loss.",
			lists: [
				{
					title: "Includes:",
					items: [
						"EA Installer",
						"Setup Handouts",
						"Access to Reporting & Maintenance",
						"FAQ & Support",
					]
				},
				{
					title: "EA Basics:",
					items: [
						"Trades price swings and price action",
						"Elegant implementation of a classical equation",
						"Moving averages and oscillators are added for exits and targets",
						"Transitional draw-downs can sometimes be visible via an intra-day (or intra-week) chart.",
					]
				},
			],
			creators: [
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
			],
			graph: [
				{
					height: "500px",
					title: "Year",
					number: "220%"
				},
				{
					height: "100px",
					title: "Month",
					number: "18%"
				},
			],
			presentRecord: image
		},
		threeContent: [
			{
				icon: <FcNeutralTrading style={coloredIconStyles}/>,
				title: "$5k Makes $5,6k in a Year",
				text: "Balance comouding (no profit withdrawing) and personal money management principles (removing some profits)."
			},
			{
				icon: <FcBullish style={coloredIconStyles}/>,
				title: "Funding & Onboarding",
				text: "Fast-track KYC via a supported broker with no capital restrictions and flexible top-up options."
			},
			{
				icon: <FcCollaboration style={coloredIconStyles}/>,
				title: "Installation Support",
				text: "You are getting a free installation support, plus we are always online."
			},
		],
		twoContent: [
			{
				icon: <FcHome style={largerColoredIconStyles}/>,
				title: "Rental",
				text: "You’ll just need to have an account with a broker ready and install the EA on a VPS and supporting it throughout the investment cycles. This approach works best with above €4,000 (for under €4,000 ask broker for a cent account).",
				button: {
					label: "Onboarding Instructions"
				}
			},
			{
				icon: <FcManager  style={largerColoredIconStyles}/>,
				title: "Managed Account",
				text: "A broker technology allows you to join in via a trusted environment without bothering about installation files and MetaTrader as a whole. Best for investors looking for a hands-off approach with as low as €400.",
				button: {
					label: "Onboarding Instructions"
				}
			}
		],
		pricing: {
			items: [
				{
					top: {
						topLabel: "Lifetime",
						number: "€999",
						bottomLabel: "One-time Payment",
						text: "A personal copy of the EA with complete access to all settings.",
						button: {
							label: "Order Now"
						}
					},
					duration: "Lifetime",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram: "In development"
				},
				{
					top: {
						topLabel: "Rental Sponsored",
						number: "€699",
						bottomLabel: "Recurring Yearly",
						text: "Quick onboading and no capital limits.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
				{
					top: {
						topLabel: "Profit Share",
						number: "€0",
						bottomLabel: "€0 Upfront Fees",
						text: "Requires a supported broker account.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: "25-35%",
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
			],
			footNote: {
				icon: <FaInfoCircle style={styledIcon}/>,
				text: "Sponsored version requires supported broker account"
			}
		},
		profitShare: {
			table: {
				head: [
					"Net Capital",
					"Profit Sharing",
				],
				body: [
					{
						key: "$400",
						value: "35%"
					},
					{
						key: "$800",
						value: "30%"
					},
					{
						key: "$5000",
						value: "25%"
					},
					{
						key: "$15000",
						value: "20%"
					},
				],
			},
			additionalContent: [
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 30%",
					caption: "Saves you 12% profit a Year"
				},
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 25%",
					caption: "Saves you 24% profit a Year"
				},
			]
		},
		brokerAccount: {
			cards : [
				{
					image: image,
					title: "XM Global",
					stars: 3.4,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
				{
					image: image,
					title: "VT Global",
					stars: 4.5,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
			],
			join: {
				steps: [
					{
						title: "Broker Account",
						text: "Open & verify an account with a supported broker."
					},
					{
						title: "Deposit Funds",
						text: "Fund any USD denominated account with at least $500."
					},
					{
						title: "Join our PAMM",
						text: "Find a link within the instructions below."
					},
				],
				footnote: {
					icon: <FaInfoCircle/>,
					text: "Detailed onboarding for rental and managed accounts."
				}
			},
			bottom: {
				icon: <FaInfoCircle/>,
				title: "Why Trusted Broker?",
				text: "Running Expert Advisors at this level of operations incurs R&D, Customer Support, Marketing costs, which we partly cover with spread-based rebates provided by a broker. This agreement does not impact the performance of the Managed Account."
			}
		},
		calculator: {
			left: {
				title: "Calculate your expected profit with Portfolio HG-Delta",
				items: [
					{
						key: "Average Profit Per Month",
						value: 14,
						tooltip: "Some important information here"
					},
					{
						key: "Possible DD",
						value: 33,
						tooltip: "Some important information here"
					},
				],
			}
		},
		reviews: [
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 1",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 2",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 3",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 4",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 5",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
		],
		faq: [
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
		]
	},
	hgGamma: {
		banner: {
			boldTitle: "1-10% Monthly",
			title: "Explosive account growth with an MT4 EA automated system.",
			caption: `Risk Warning: Remember financial trading is highly speculative & may lead to the loss of your funds.`,
			captionTwo: "Verified by:",
			verifier: "myFxBook",
			video: "https://res.cloudinary.com/dqweh6zte/video/upload/v1681212645/henriot/pexels-pressmaster-3130182-3840x2160-30fps_zigaup.mp4",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			button: {
				action: () => {console.log("Hello there")},
				label: "Pricing"
			}
		},
		features: {
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			content: [
				{
					title: "Consistent Returns",
					icon: <CgArrowLongUp style={styledFeaturesIcon}/>,
					text: "Remarkable 5-25% monthly returns based on 2+ years of live trading."
				},
				{
					title: "Rental & Managed",
					icon: <CgHome style={styledFeaturesIcon}/>,
					text: "Trade on your account or invest in a managed account at €0 upfront cost."
				},
				{
					title: "Sit Back & Relax",
					icon: <BsFillEmojiSmileFill style={styledFeaturesIcon}/>,
					text: "No previous experience with MT4 EAs required for neither rental nor managed accounts."
				},
				{
					title: "Risk Management",
					icon: <BsShieldLock style={styledFeaturesIcon}/>,
					text: "By playing with risk levels, you can increase/decrease a profitability factor."
				},
				{
					title: "Reporting & Transparency",
					icon: <BsFileEarmarkText style={styledFeaturesIcon}/>,
					text: "No hidden fees, clear reporting and full verification via Myfxbook."
				},
				{
					title: "Full Capital Control",
					icon: <FiSliders style={styledFeaturesIcon}/>,
					text: `No "freezing the capital", withdraw profits or top up your account at any moment.`
				},
			],
			cardGroup: [
				{
					number: "15%",
					title: "Monthly Returns",
					text: "Average, based on past performance (8-25%)."
				},
				{
					number: "65%",
					title: "Quarterly Returns",
					text: "May deviate between 30%-100%"
				},
				{
					number: "220%",
					title: "Yearly Returns",
					text: "Based on past performance average (140-300%)."
				},
				{
					number: "30%",
					title: "Drawdown",
					text: "Losing months are rare, but floating draw-downs can occur."
				},
			]
		},
		whatIs: {
			title: "What’s HG-delta EA?",
			subtitle: "Grid-trading algorithm with a specific approach to Take Profit that aims to never close a day at a loss.",
			lists: [
				{
					title: "Includes:",
					items: [
						"EA Installer",
						"Setup Handouts",
						"Access to Reporting & Maintenance",
						"FAQ & Support",
					]
				},
				{
					title: "EA Basics:",
					items: [
						"Trades price swings and price action",
						"Elegant implementation of a classical equation",
						"Moving averages and oscillators are added for exits and targets",
						"Transitional draw-downs can sometimes be visible via an intra-day (or intra-week) chart.",
					]
				},
			],
			creators: [
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
			],
			graph: [
				{
					height: "500px",
					title: "Year",
					number: "220%"
				},
				{
					height: "100px",
					title: "Month",
					number: "18%"
				},
			],
			presentRecord: image
		},
		threeContent: [
			{
				icon: <FcNeutralTrading style={coloredIconStyles}/>,
				title: "$5k Makes $5,6k in a Year",
				text: "Balance comouding (no profit withdrawing) and personal money management principles (removing some profits)."
			},
			{
				icon: <FcBullish style={coloredIconStyles}/>,
				title: "Funding & Onboarding",
				text: "Fast-track KYC via a supported broker with no capital restrictions and flexible top-up options."
			},
			{
				icon: <FcCollaboration style={coloredIconStyles}/>,
				title: "Installation Support",
				text: "You are getting a free installation support, plus we are always online."
			},
		],
		twoContent: [
			{
				icon: <FcHome style={largerColoredIconStyles}/>,
				title: "Rental",
				text: "You’ll just need to have an account with a broker ready and install the EA on a VPS and supporting it throughout the investment cycles. This approach works best with above €4,000 (for under €4,000 ask broker for a cent account).",
				button: {
					label: "Onboarding Instructions"
				}
			},
			{
				icon: <FcManager  style={largerColoredIconStyles}/>,
				title: "Managed Account",
				text: "A broker technology allows you to join in via a trusted environment without bothering about installation files and MetaTrader as a whole. Best for investors looking for a hands-off approach with as low as €400.",
				button: {
					label: "Onboarding Instructions"
				}
			}
		],
		pricing: {
			items: [
				{
					top: {
						topLabel: "Lifetime",
						number: "€999",
						bottomLabel: "One-time Payment",
						text: "A personal copy of the EA with complete access to all settings.",
						button: {
							label: "Order Now"
						}
					},
					duration: "Lifetime",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram: "In development"
				},
				{
					top: {
						topLabel: "Rental Sponsored",
						number: "€699",
						bottomLabel: "Recurring Yearly",
						text: "Quick onboading and no capital limits.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
				{
					top: {
						topLabel: "Profit Share",
						number: "€0",
						bottomLabel: "€0 Upfront Fees",
						text: "Requires a supported broker account.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: "25-35%",
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
			],
			footNote: {
				icon: <FaInfoCircle style={styledIcon}/>,
				text: "Sponsored version requires supported broker account"
			}
		},
		profitShare: {
			table: {
				head: [
					"Net Capital",
					"Profit Sharing",
				],
				body: [
					{
						key: "$400",
						value: "35%"
					},
					{
						key: "$800",
						value: "30%"
					},
					{
						key: "$5000",
						value: "25%"
					},
					{
						key: "$15000",
						value: "20%"
					},
				],
			},
			additionalContent: [
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 30%",
					caption: "Saves you 12% profit a Year"
				},
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 25%",
					caption: "Saves you 24% profit a Year"
				},
			]
		},
		brokerAccount: {
			cards : [
				{
					image: image,
					title: "XM Global",
					stars: 3.4,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
				{
					image: image,
					title: "VT Global",
					stars: 4.5,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
			],
			join: {
				steps: [
					{
						title: "Broker Account",
						text: "Open & verify an account with a supported broker."
					},
					{
						title: "Deposit Funds",
						text: "Fund any USD denominated account with at least $500."
					},
					{
						title: "Join our PAMM",
						text: "Find a link within the instructions below."
					},
				],
				footnote: {
					icon: <FaInfoCircle/>,
					text: "Detailed onboarding for rental and managed accounts."
				}
			},
			bottom: {
				icon: <FaInfoCircle/>,
				title: "Why Trusted Broker?",
				text: "Running Expert Advisors at this level of operations incurs R&D, Customer Support, Marketing costs, which we partly cover with spread-based rebates provided by a broker. This agreement does not impact the performance of the Managed Account."
			}
		},
		calculator: {
			left: {
				title: "Calculate your expected profit with Portfolio HG-Delta",
				items: [
					{
						key: "Average Profit Per Month",
						value: 14,
						tooltip: "Some important information here"
					},
					{
						key: "Possible DD",
						value: 33,
						tooltip: "Some important information here"
					},
				],
			}
		},
		reviews: [
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 1",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 2",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 3",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 4",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 5",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
		],
		faq: [
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
		]
	},
	hgSigma: {
		banner: {
			boldTitle: "1-10% Monthly",
			title: "Explosive account growth with an MT4 EA automated system.",
			caption: `Risk Warning: Remember financial trading is highly speculative & may lead to the loss of your funds.`,
			captionTwo: "Verified by:",
			verifier: "myFxBook",
			video: "https://res.cloudinary.com/dqweh6zte/video/upload/v1681212645/henriot/pexels-pressmaster-3130182-3840x2160-30fps_zigaup.mp4",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			button: {
				action: () => {console.log("Hello there")},
				label: "Pricing"
			}
		},
		features: {
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
					{
						label: "Investment solution",
						link: "/landing/investment-solutions"
					},
				],
				last: {
					label: "HG Delta"
				}
			},
			content: [
				{
					title: "Consistent Returns",
					icon: <CgArrowLongUp style={styledFeaturesIcon}/>,
					text: "Remarkable 5-25% monthly returns based on 2+ years of live trading."
				},
				{
					title: "Rental & Managed",
					icon: <CgHome style={styledFeaturesIcon}/>,
					text: "Trade on your account or invest in a managed account at €0 upfront cost."
				},
				{
					title: "Sit Back & Relax",
					icon: <BsFillEmojiSmileFill style={styledFeaturesIcon}/>,
					text: "No previous experience with MT4 EAs required for neither rental nor managed accounts."
				},
				{
					title: "Risk Management",
					icon: <BsShieldLock style={styledFeaturesIcon}/>,
					text: "By playing with risk levels, you can increase/decrease a profitability factor."
				},
				{
					title: "Reporting & Transparency",
					icon: <BsFileEarmarkText style={styledFeaturesIcon}/>,
					text: "No hidden fees, clear reporting and full verification via Myfxbook."
				},
				{
					title: "Full Capital Control",
					icon: <FiSliders style={styledFeaturesIcon}/>,
					text: `No "freezing the capital", withdraw profits or top up your account at any moment.`
				},
			],
			cardGroup: [
				{
					number: "15%",
					title: "Monthly Returns",
					text: "Average, based on past performance (8-25%)."
				},
				{
					number: "65%",
					title: "Quarterly Returns",
					text: "May deviate between 30%-100%"
				},
				{
					number: "220%",
					title: "Yearly Returns",
					text: "Based on past performance average (140-300%)."
				},
				{
					number: "30%",
					title: "Drawdown",
					text: "Losing months are rare, but floating draw-downs can occur."
				},
			]
		},
		whatIs: {
			title: "What’s HG-delta EA?",
			subtitle: "Grid-trading algorithm with a specific approach to Take Profit that aims to never close a day at a loss.",
			lists: [
				{
					title: "Includes:",
					items: [
						"EA Installer",
						"Setup Handouts",
						"Access to Reporting & Maintenance",
						"FAQ & Support",
					]
				},
				{
					title: "EA Basics:",
					items: [
						"Trades price swings and price action",
						"Elegant implementation of a classical equation",
						"Moving averages and oscillators are added for exits and targets",
						"Transitional draw-downs can sometimes be visible via an intra-day (or intra-week) chart.",
					]
				},
			],
			creators: [
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
				{
					image: image,
					text: "Kennedy Muturi",
					role: "Strategy provider"
				},
			],
			graph: [
				{
					height: "500px",
					title: "Year",
					number: "220%"
				},
				{
					height: "100px",
					title: "Month",
					number: "18%"
				},
			],
			presentRecord: image
		},
		threeContent: [
			{
				icon: <FcNeutralTrading style={coloredIconStyles}/>,
				title: "$5k Makes $5,6k in a Year",
				text: "Balance comouding (no profit withdrawing) and personal money management principles (removing some profits)."
			},
			{
				icon: <FcBullish style={coloredIconStyles}/>,
				title: "Funding & Onboarding",
				text: "Fast-track KYC via a supported broker with no capital restrictions and flexible top-up options."
			},
			{
				icon: <FcCollaboration style={coloredIconStyles}/>,
				title: "Installation Support",
				text: "You are getting a free installation support, plus we are always online."
			},
		],
		twoContent: [
			{
				icon: <FcHome style={largerColoredIconStyles}/>,
				title: "Rental",
				text: "You’ll just need to have an account with a broker ready and install the EA on a VPS and supporting it throughout the investment cycles. This approach works best with above €4,000 (for under €4,000 ask broker for a cent account).",
				button: {
					label: "Onboarding Instructions"
				}
			},
			{
				icon: <FcManager  style={largerColoredIconStyles}/>,
				title: "Managed Account",
				text: "A broker technology allows you to join in via a trusted environment without bothering about installation files and MetaTrader as a whole. Best for investors looking for a hands-off approach with as low as €400.",
				button: {
					label: "Onboarding Instructions"
				}
			}
		],
		pricing: {
			items: [
				{
					top: {
						topLabel: "Lifetime",
						number: "€999",
						bottomLabel: "One-time Payment",
						text: "A personal copy of the EA with complete access to all settings.",
						button: {
							label: "Order Now"
						}
					},
					duration: "Lifetime",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram: "In development"
				},
				{
					top: {
						topLabel: "Rental Sponsored",
						number: "€699",
						bottomLabel: "Recurring Yearly",
						text: "Quick onboading and no capital limits.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: <BsXLg style={styledIcon}/>,
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
				{
					top: {
						topLabel: "Profit Share",
						number: "€0",
						bottomLabel: "€0 Upfront Fees",
						text: "Requires a supported broker account.",
						button: {
							label: "Order Now"
						}
					},
					duration: "12 Months",
					profitShare: "25-35%",
					support: <FaCheck style={styledIcon}/>,
					telegram:"via PAMM Panel"
				},
			],
			footNote: {
				icon: <FaInfoCircle style={styledIcon}/>,
				text: "Sponsored version requires supported broker account"
			}
		},
		profitShare: {
			table: {
				head: [
					"Net Capital",
					"Profit Sharing",
				],
				body: [
					{
						key: "$400",
						value: "35%"
					},
					{
						key: "$800",
						value: "30%"
					},
					{
						key: "$5000",
						value: "25%"
					},
					{
						key: "$15000",
						value: "20%"
					},
				],
			},
			additionalContent: [
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 30%",
					caption: "Saves you 12% profit a Year"
				},
				{
					icon: <FaQuestion style={styledIcon}/>,
					title: "Profit Share 25%",
					caption: "Saves you 24% profit a Year"
				},
			]
		},
		brokerAccount: {
			cards : [
				{
					image: image,
					title: "XM Global",
					stars: 3.4,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
				{
					image: image,
					title: "VT Global",
					stars: 4.5,
					items : [
						{
							key: "Trading Platform",
							value: "MT4, MT5"
						},
						{
							key: "Max Leverage",
							value: "500:1"
						},
						{
							key: "Markets",
							value: "Forex, CFDs, Crypto"
						},
						{
							key: "Regulations",
							value: "ASIC,CIMA"
						},
						{
							key: "Min Deposit",
							value: "$100"
						},
					]
				},
			],
			join: {
				steps: [
					{
						title: "Broker Account",
						text: "Open & verify an account with a supported broker."
					},
					{
						title: "Deposit Funds",
						text: "Fund any USD denominated account with at least $500."
					},
					{
						title: "Join our PAMM",
						text: "Find a link within the instructions below."
					},
				],
				footnote: {
					icon: <FaInfoCircle/>,
					text: "Detailed onboarding for rental and managed accounts."
				}
			},
			bottom: {
				icon: <FaInfoCircle/>,
				title: "Why Trusted Broker?",
				text: "Running Expert Advisors at this level of operations incurs R&D, Customer Support, Marketing costs, which we partly cover with spread-based rebates provided by a broker. This agreement does not impact the performance of the Managed Account."
			}
		},
		calculator: {
			left: {
				title: "Calculate your expected profit with Portfolio HG-Delta",
				items: [
					{
						key: "Average Profit Per Month",
						value: 14,
						tooltip: "Some important information here"
					},
					{
						key: "Possible DD",
						value: 33,
						tooltip: "Some important information here"
					},
				],
			}
		},
		reviews: [
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 1",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 2",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 3",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 4",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
			{
				icon: <FcBusinessman style={reviewIconStyles}/>,
				name: "James Ndungu 5",
				location: "Nairobi Kenya",
				text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
			},
		],
		faq: [
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
				answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
			},
			{
				icon: <FaQuestion style={styledIcon} />,
				question: "What kind of results are possible with the HG-delta EA method?",
				answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
			},
		]
	},
}

export const options = [
	{
		label: "HG Delta",
		reduxValue: investmentForexData.hgDelta
	},
	{
		label: "HG Alpha",
		reduxValue: investmentForexData.hgAlpha
	},
	{
		label: "HG Beta",
		reduxValue: investmentForexData.hgBeta
	},
	{
		label: "HG Gamma",
		reduxValue: investmentForexData.hgGamma
	},
	{
		label: "HG Sigma",
		reduxValue: investmentForexData.hgSigma
	},
]


export const singleInfo = {
	banner: {
		boldTitle: "1-10% Monthly",
		title: "Explosive account growth with an MT4 EA automated system.",
		caption: `Risk Warning: Remember financial trading is highly speculative & may lead to the loss of your funds.`,
		captionTwo: "Verified by:",
		verifier: "myFxBook",
		video: "https://res.cloudinary.com/dqweh6zte/video/upload/v1681212645/henriot/pexels-pressmaster-3130182-3840x2160-30fps_zigaup.mp4",
		breadcrumbsItem: {
			items: [
				{
					label: "Home",
					link: "/landing/main"
				},
				{
					label: "Investment solution",
					link: "/landing/investment-solutions"
				},
			],
			last: {
				label: "HG Delta"
			}
		},
		button: {
			action: () => {console.log("Hello there")},
			label: "Pricing"
		}
	},
	features: {
		breadcrumbsItem: {
			items: [
				{
					label: "Home",
					link: "/landing/main"
				},
				{
					label: "Investment solution",
					link: "/landing/investment-solutions"
				},
			],
			last: {
				label: "HG Delta"
			}
		},
		content: [
			{
				title: "Consistent Returns",
				icon: <CgArrowLongUp style={styledFeaturesIcon}/>,
				text: "Remarkable 5-25% monthly returns based on 2+ years of live trading."
			},
			{
				title: "Rental & Managed",
				icon: <CgHome style={styledFeaturesIcon}/>,
				text: "Trade on your account or invest in a managed account at €0 upfront cost."
			},
			{
				title: "Sit Back & Relax",
				icon: <BsFillEmojiSmileFill style={styledFeaturesIcon}/>,
				text: "No previous experience with MT4 EAs required for neither rental nor managed accounts."
			},
			{
				title: "Risk Management",
				icon: <BsShieldLock style={styledFeaturesIcon}/>,
				text: "By playing with risk levels, you can increase/decrease a profitability factor."
			},
			{
				title: "Reporting & Transparency",
				icon: <BsFileEarmarkText style={styledFeaturesIcon}/>,
				text: "No hidden fees, clear reporting and full verification via Myfxbook."
			},
			{
				title: "Full Capital Control",
				icon: <FiSliders style={styledFeaturesIcon}/>,
				text: `No "freezing the capital", withdraw profits or top up your account at any moment.`
			},
		],
		cardGroup: [
			{
				number: "15%",
				title: "Monthly Returns",
				text: "Average, based on past performance (8-25%)."
			},
			{
				number: "65%",
				title: "Quarterly Returns",
				text: "May deviate between 30%-100%"
			},
			{
				number: "220%",
				title: "Yearly Returns",
				text: "Based on past performance average (140-300%)."
			},
			{
				number: "30%",
				title: "Drawdown",
				text: "Losing months are rare, but floating draw-downs can occur."
			},
		]
	},
	whatIs: {
		title: "What’s HG-delta EA?",
		subtitle: "Grid-trading algorithm with a specific approach to Take Profit that aims to never close a day at a loss.",
		lists: [
			{
				title: "Includes:",
				items: [
					"EA Installer",
					"Setup Handouts",
					"Access to Reporting & Maintenance",
					"FAQ & Support",
				]
			},
			{
				title: "EA Basics:",
				items: [
					"Trades price swings and price action",
					"Elegant implementation of a classical equation",
					"Moving averages and oscillators are added for exits and targets",
					"Transitional draw-downs can sometimes be visible via an intra-day (or intra-week) chart.",
				]
			},
		],
		creators: [
			{
				image: image,
				text: "Kennedy Muturi",
				role: "Strategy provider"
			},
			{
				image: image,
				text: "Kennedy Muturi",
				role: "Strategy provider"
			},
		],
		graph: [
			{
				height: "500px",
				title: "Year",
				number: "220%"
			},
			{
				height: "100px",
				title: "Month",
				number: "18%"
			},
		],
		presentRecord: image
	},
	threeContent: [
		{
			icon: <FcNeutralTrading style={coloredIconStyles}/>,
			title: "$5k Makes $5,6k in a Year",
			text: "Balance comouding (no profit withdrawing) and personal money management principles (removing some profits)."
		},
		{
			icon: <FcBullish style={coloredIconStyles}/>,
			title: "Funding & Onboarding",
			text: "Fast-track KYC via a supported broker with no capital restrictions and flexible top-up options."
		},
		{
			icon: <FcCollaboration style={coloredIconStyles}/>,
			title: "Installation Support",
			text: "You are getting a free installation support, plus we are always online."
		},
	],
	twoContent: [
		{
			icon: <FcHome style={largerColoredIconStyles}/>,
			title: "Rental",
			text: "You’ll just need to have an account with a broker ready and install the EA on a VPS and supporting it throughout the investment cycles. This approach works best with above €4,000 (for under €4,000 ask broker for a cent account).",
			button: {
				label: "Onboarding Instructions"
			}
		},
		{
			icon: <FcManager  style={largerColoredIconStyles}/>,
			title: "Managed Account",
			text: "A broker technology allows you to join in via a trusted environment without bothering about installation files and MetaTrader as a whole. Best for investors looking for a hands-off approach with as low as €400.",
			button: {
				label: "Onboarding Instructions"
			}
		}
	],
	pricing: {
		items: [
			{
				top: {
					topLabel: "Lifetime",
					number: "€999",
					bottomLabel: "One-time Payment",
					text: "A personal copy of the EA with complete access to all settings.",
					button: {
						label: "Order Now"
					}
				},
				duration: "Lifetime",
				profitShare: <BsXLg style={styledIcon}/>,
				support: <FaCheck style={styledIcon}/>,
				telegram: "In development"
			},
			{
				top: {
					topLabel: "Rental Sponsored",
					number: "€699",
					bottomLabel: "Recurring Yearly",
					text: "Quick onboading and no capital limits.",
					button: {
						label: "Order Now"
					}
				},
				duration: "12 Months",
				profitShare: <BsXLg style={styledIcon}/>,
				support: <FaCheck style={styledIcon}/>,
				telegram:"via PAMM Panel"
			},
			{
				top: {
					topLabel: "Profit Share",
					number: "€0",
					bottomLabel: "€0 Upfront Fees",
					text: "Requires a supported broker account.",
					button: {
						label: "Order Now"
					}
				},
				duration: "12 Months",
				profitShare: "25-35%",
				support: <FaCheck style={styledIcon}/>,
				telegram:"via PAMM Panel"
			},
		],
		footNote: {
			icon: <FaInfoCircle style={styledIcon}/>,
			text: "Sponsored version requires supported broker account"
		}
	},
	profitShare: {
		table: {
			head: [
				"Net Capital",
				"Profit Sharing",
			],
			body: [
				{
					key: "$400",
					value: "35%"
				},
				{
					key: "$800",
					value: "30%"
				},
				{
					key: "$5000",
					value: "25%"
				},
				{
					key: "$15000",
					value: "20%"
				},
			],
		},
		additionalContent: [
			{
				icon: <FaQuestion style={styledIcon}/>,
				title: "Profit Share 30%",
				caption: "Saves you 12% profit a Year"
			},
			{
				icon: <FaQuestion style={styledIcon}/>,
				title: "Profit Share 25%",
				caption: "Saves you 24% profit a Year"
			},
		]
	},
	brokerAccount: {
		cards : [
			{
				image: image,
				title: "XM Global",
				stars: 3.4,
				items : [
					{
						key: "Trading Platform",
						value: "MT4, MT5"
					},
					{
						key: "Max Leverage",
						value: "500:1"
					},
					{
						key: "Markets",
						value: "Forex, CFDs, Crypto"
					},
					{
						key: "Regulations",
						value: "ASIC,CIMA"
					},
					{
						key: "Min Deposit",
						value: "$100"
					},
				]
			},
			{
				image: image,
				title: "VT Global",
				stars: 4.5,
				items : [
					{
						key: "Trading Platform",
						value: "MT4, MT5"
					},
					{
						key: "Max Leverage",
						value: "500:1"
					},
					{
						key: "Markets",
						value: "Forex, CFDs, Crypto"
					},
					{
						key: "Regulations",
						value: "ASIC,CIMA"
					},
					{
						key: "Min Deposit",
						value: "$100"
					},
				]
			},
		],
		join: {
			steps: [
				{
					title: "Broker Account",
					text: "Open & verify an account with a supported broker."
				},
				{
					title: "Deposit Funds",
					text: "Fund any USD denominated account with at least $500."
				},
				{
					title: "Join our PAMM",
					text: "Find a link within the instructions below."
				},
			],
			footnote: {
				icon: <FaInfoCircle/>,
				text: "Detailed onboarding for rental and managed accounts."
			}
		},
		bottom: {
			icon: <FaInfoCircle/>,
			title: "Why Trusted Broker?",
			text: "Running Expert Advisors at this level of operations incurs R&D, Customer Support, Marketing costs, which we partly cover with spread-based rebates provided by a broker. This agreement does not impact the performance of the Managed Account."
		}
	},
	calculator: {
		left: {
			title: "Calculate your expected profit with Portfolio HG-Delta",
			items: [
				{
					key: "Average Profit Per Month",
					value: 14,
					tooltip: "Some important information here"
				},
				{
					key: "Possible DD",
					value: 33,
					tooltip: "Some important information here"
				},
			],
		}
	},
	reviews: [
		{
			icon: <FcBusinessman style={reviewIconStyles}/>,
			name: "James Ndungu 1",
			location: "Nairobi Kenya",
			text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
		},
		{
			icon: <FcBusinessman style={reviewIconStyles}/>,
			name: "James Ndungu 2",
			location: "Nairobi Kenya",
			text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
		},
		{
			icon: <FcBusinessman style={reviewIconStyles}/>,
			name: "James Ndungu 3",
			location: "Nairobi Kenya",
			text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
		},
		{
			icon: <FcBusinessman style={reviewIconStyles}/>,
			name: "James Ndungu 4",
			location: "Nairobi Kenya",
			text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
		},
		{
			icon: <FcBusinessman style={reviewIconStyles}/>,
			name: "James Ndungu 5",
			location: "Nairobi Kenya",
			text: "They taught me new concepts to read the forex market and respect its rules. Daily analysis to capture possible negotiable movements. Mandatory reading their emails 7 days a week"
		},
	],
	faq: [
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
			answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
		},
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "What kind of results are possible with the HG-delta EA method?",
			answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
		},
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
			answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
		},
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "What kind of results are possible with the HG-delta EA method?",
			answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
		},
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
			answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
		},
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "What kind of results are possible with the HG-delta EA method?",
			answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
		},
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "How are trading decisions, entries, exits, and trade management done for HG-delta EA?",
			answer: "The HG-delta EA is fully based on technical analysis. The trading system is only traded on the EUR/USD. It consists of two EAs that work simultaneously, one to buy and the other to sell. Also, depending on the balance, the two EAs must run at the same time on several EUR/USD charts with different timeframes. The EA opens a lot of trades in a day, both longs and shorts (hedging is used). The entries and exits are based on a mixture of moving averages, oscillators, and price swings."
		},
		{
			icon: <FaQuestion style={styledIcon} />,
			question: "What kind of results are possible with the HG-delta EA method?",
			answer: "The best results we managed to make were 28% gain per month. But this was with the highest risk settings. With lower risk settings, the lowest gain was +8% per month on average. Usually, the EA aims for results between 13% and 20% per month"
		},
	]
}
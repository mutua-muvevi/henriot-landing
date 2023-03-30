import { FaBrain, FaCar,  FaCloudDownloadAlt, FaNetworkWired, FaTv, FaRobot, FaBitcoin } from "react-icons/fa";
import { BsPrinterFill } from "react-icons/bs"
import { MdSendToMobile } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi"

const BlogImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1679043191/henriot/pexels-%E6%B4%8B%E6%A6%A4-%E9%83%AD-2399840_re8cvb.jpg"

export const equitiesData = [
	{
		strategy: "Other funds",
		breadcrumbsLabel: "title Here",
		banner: {
			title: "The big title here",
			paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum fringilla ligula, a porta mi viverra nec. Nullam vel ipsum ligula. Fusce vel metus venenatis, lobortis metus vitae, gravida magna. Vivamus accumsan, diam eu interdum fermentum, tortor est dignissim quam, vel consectetur sem lectus nec magna. Donec commodo ultrices porttitor. Morbi aliquet, eros non vulputate aliquet, purus odio accumsan risus, sit amet lacinia urna turpis nec diam. Etiam pharetra iaculis ex nec accumsan. Proin vel turpis at lectus ultrices tristique ac et lectus. Nam egestas, turpis vitae vulputate faucibus, leo sem vestibulum lectus, ac auctor nisi sem mollis velit. Duis lacinia sed ex tristique blandit. Etiam vitae ultricies purus. Aliquam sit amet nulla tortor. Phasellus pretium risus tortor, eu bibendum risus congue eu.",
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg"
		}
	}
]


const styledIcons = {
	fontSize:"50px"
}

const dropDown = [
	{
		label: "Market disruptor",
		value: "market-disruptor"
	},
	{
		label: "DNA game-changer",
		value: "dna-game-changer"
	},
	{
		label: "Finance frontier",
		value: "finance-frontier"
	},
	{
		label: "Future fabrication",
		value: "future-fabrication"
	},
	{
		label: "Crypto craze",
		value: "crypto-craze"
	},
	{
		label: "Augmented reality",
		value: "augmented-reality"
	},
	{
		label: "Decentralized web 3.0",
		value: "decentralized-web-3.0"
	},
	{
		label: "Intelligent machines",
		value: "intelligent-machines"
	},
	{
		label: "Intelligent machines",
		value: "intelligent-machines"
	},
	{
		label: "Galactic adventure",
		value: "galactic-adventure"
	},
	{
		label: "Silicon Wadi",
		value: "silicon-wadi"
	},
	{
		label: "Digital gold",
		value: "digital-gold"
	},
	{
		label: "Future unicorns",
		value: "future-unicorns"
	},
	{
		label: "On-demand mobility",
		value: "on-demand-mobility"
	},
	{
		label: "Sustainable investment",
		value: "sustainable-investment"
	},
	{
		label: "Other funds",
		value: "other-funds"
	},
]


export const investmentEquityData = {
	marketDisruptor: {
		banner: {
			title: "Market Disruptor",
			paragraph:"Aims to provide broad exposure to disruptive innovation. Henriot believes innovations centered around artificial intelligence, robotics, energy storage, DNA sequencing, and blockchain technology will change the way the world works and deliver outsized growth as industries transform.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Market disruptor"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733726/henriot/pexels-pok-rie-5807886_laufb3.jpg"
		},
		focus: {
			icons: [
				{
					icon: "Fabrain",
					title: "Artificial Inteligence"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Cloud computing"
				},
				{
					icon: "FaTv",
					title: "Digital Media"
				},
				{
					icon: "FaNetworkWired",
					title: "IoT"
				},
				{
					icon: "MdSendToMobile",
					title: "Mobile Payments"
				},
				{
					icon: "FaRobot",
					title: "Cloud computing"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "35-50"
				},
				{
					key: "Inception",
					value: "Sept. 2014"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Nick Grous Yassine Elmandjra"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on innovations within financial technology (“fintech”). Companies within this strategy are focused on changing the way the financial sector works, removing friction, and increasing accessibility to financial products and services.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Research processr,",
				normal:"driven by Henriot’s Open Research Ecosystem"
			},
		]
	},
	dnaGameChanger: {
		banner: {
			title: "DNA game changer",
			paragraph:"Aims to provide exposure to DNA sequencing technology, gene editing, CRISPR, therapeutics, agricultural biology, and molecular diagnostics. These innovations can help us restructuring health care, agriculture, pharmaceuticals, and enhancing the quality of life.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "DNA Game changer"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733733/henriot/pexels-chokniti-khongchum-2280547_fyl2ph.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaDna",
					title: "DNA Sequencing"
				},
				{
					icon: "BiDna",
					title: "Gene Editing"
				},
				{
					icon: "GiDnaHelix",
					title: "Gene Therapy"
				},
				{
					icon: "AiOutlineTestTub",
					title: "Ag Bio"
				},
				{
					icon: "BiTarget ",
					title: "Targeted Therapeutics"
				},
				{
					icon: "GiDna",
					title: "Molecular Diagnostics"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "30-50"
				},
				{
					key: "Inception",
					value: "Oct. 2014"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Simon Barnett Alexandra Urman"
				},
			],
			description: {
				title: "Strategy Description",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in the US listed securities, including ADRs, of companies focused on the genomics revolution. Companies within this strategy aim to capture the substantial benefits of new products and services associated with technological and scientific developments in DNA sequencing, gene editing, targeted therapeutics, bioinformatics, and agricultural biology.`
				]
			}
		},
		characteristics: []
	},
	financeFrontier: {
		banner: {
			title: "Finance froontier",
			paragraph:"Aims to provide exposure to fintech innovations including mobile payments, digital wallets, peer-to-peer lending, blockchain technology, and financial risk transformation. These innovations should revolutionize the financial industry, impacting every sector of the global economy.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Finance Frontier"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733691/henriot/finance_frontier_eix15z.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Digital Wallets"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Mobile Payments"
				},
				{
					icon: "FaTv",
					title: "Lending"
				},
				{
					icon: "FaNetworkWired",
					title: "Risk Transformation"
				},
				{
					icon: "MdSendToMobile",
					title: "Artificial Intelligence"
				},
				{
					icon: "FaRobot",
					title: "eCommerce"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "35-55"
				},
				{
					key: "Inception",
					value: "Dec. 2014"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Max Friedrich Will Summerlin Yassine Elmandjra Yulong Cui"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on innovations within financial technology (“fintech”). Companies within this strategy are focused on changing the way the financial sector works, removing friction, and increasing accessibility to financial products and services.`
				]
			}
		},
		characteristics: []
	},
	futureFabrication: {
		banner: {
			title: "Future fabrication",
			paragraph:"Seeks to provide targeted exposure to companies in the 3D printing ecosystem, including 3D printing hardware, software, measurement, and materials. 3D printing should transform manufacturing by providing greater design complexity, accuracy, efficiency, and customization.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Future fabrication"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733690/henriot/future_fabrication_yqykho.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "3D Printing Hardware"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Scanning & Measurement"
				},
				{
					icon: "FaTv",
					title: "Materials"
				},
				{
					icon: "FaNetworkWired",
					title: "Software"
				},
				{
					icon: "MdSendToMobile",
					title: "Enabling Technology"
				},
				{
					icon: "FaRobot",
					title: "Artificial Intelligence"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Index Equity"
				},
				{
					key: "Typical # of Holding",
					value: "50"
				},
				{
					key: "Inception",
					value: "July 2016"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Tasha Keeney"
				},
			],
			description: {
				title: "Strategy Decription",
				paragraphs: [
					`This index-based equity strategy seeks to provide investment results that closely correspond to the performance of the Total 3D-Printing Index, which is designed to track the price movements of stocks of companies involved in the 3D printing industry. The Total 3D-Printing Index is based on Henriot’s research and is composed of equity securities and depositary receipts of companies that are engaged in 3D printing related businesses within the following business lines: (i) 3D printing hardware, (ii) computer aided design (“CAD”) and 3D printing simulation software, (iii) 3D printing centers, (iv) scanning and measurement, and (v) 3D printing materials.`
				]
			}
		},
		characteristics: []
	},
	cryptoCraze: {
		banner: {
			title: "Crypto craze",
			paragraph:"Henriot believes public blockchains are powering novel forms of coordination across finance and the internet. The Investment Manager believes that cryptocurrency value and market share dynamics will be “power law distributed,” meaning that a few cryptocurrencies will capture the majority of value.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Other funds"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733720/henriot/pexels-daniel-dan-7708811_xqx7ks.jpg"
		},
		focus: {
			icons: [
				{
					icon: <FaBitcoin style={styledIcons}/>,
					title: "Crypto currencies"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active SMA"
				},
				{
					key: "Investment manager",
					value: "Henriot Investment Management LLC"
				},
				{
					key: "Analysts",
					value: "Yassine Elmandjra"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`Since the emergence of Bitcoin, we have witnessed the rise of a global battle among monetary systems, both sovereign and non-sovereign. Henriot believes cryptocurrencies governed by neutral, open source networks have the potential to win this battle. By unlocking a new mechanism to store and transfer value, cryptocurrencies have the opportunity to create an open foundation of strong assurances in wealth and monetary integrity. Henriot believes cryptocurrencies will contribute more dramatically and profoundly to the evolution of monetary systems than any other breakthrough in history. Instead of relying on centralized intermediaries to enforce its rules, cryptocurrencies rely on a distributed network of computers. This architecture enables it not only to function outside the purview of legacy systems, but also to challenge them. In the absence of central enforcement, its integrity is likely to be a function of its openness and transparency, a shift away from old world central banks and monetary institutions.`
				]
			}
		},
		characteristics: []
	},
	augmentedReality: {
		banner: {
			title: "Augmented reality",
			paragraph:"Seeks to provide exposure to artificial intelligence, deep learning, big data, cloud computing, cybersecurity, and blockchain technology. These innovations are changing the way the world manages information, analyzes data, purchases and consumes goods, and communicates across the globe",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Augmented Reality"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733755/henriot/pexels-markus-spiske-177598_vskau8.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Artificial Inteligence"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Cloud computing"
				},
				{
					icon: "FaTv",
					title: "Digital Media"
				},
				{
					icon: "FaNetworkWired",
					title: "IoT"
				},
				{
					icon: "MdSendToMobile",
					title: "Mobile Payments"
				},
				{
					icon: "FaRobot",
					title: "Cloud computing"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "35-50"
				},
				{
					key: "Inception",
					value: "Sept. 2014"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Nick Grous Yassine Elmandjra"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on innovations within financial technology (“fintech”). Companies within this strategy are focused on changing the way the financial sector works, removing friction, and increasing accessibility to financial products and services.`
				]
			}
		},
		characteristics: []
	},
	decentralizedWeb3: {
		banner: {
			title: "Decentralized web 3",
			paragraph:"This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on the Metaverse. Companies within this strategy are focused on building the future of the internet. The Metaverse is a shared virtual universe that could ultimately connect everyone and everything. As it matures its primary function will be to host and connect 3D-rich virtual environments and worlds.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Decentralized web 3"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733731/henriot/decentralized_web_ditdsv.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Artificial Inteligence"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Cloud computing"
				},
				{
					icon: "FaTv",
					title: "Digital Media"
				},
				{
					icon: "FaNetworkWired",
					title: "IoT"
				},
				{
					icon: "MdSendToMobile",
					title: "Mobile Payments"
				},
				{
					icon: "FaRobot",
					title: "Cloud computing"
				},
				{
					icon: "FaRobot",
					title: "Social media"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "30-50"
				},
				{
					key: "Inception",
					value: "2022"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Nick Grous Andrew Kim Frank Downing"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on the Metaverse. Companies within this strategy are focused on building the future of the internet. The Metaverse is a shared virtual universe that could ultimately connect everyone and everything. As it matures its primary function will be to host and connect 3D-rich virtual environments and worlds.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Research processr,",
				normal:"driven by Henriot’s Open Research Ecosystem"
			},
		]
	},
	intelligentMachine: {
		banner: {
			title: "Intelligent machine",
			paragraph:"Seeks to provide exposure to autonomous mobility, electric vehicles, robotics and automation, 3D printing, and space exploration. Advancements in these areas are enhancing productivity while reducing costs and transforming manufacturing, production, and infrastructure.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Inteligent Machines"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733719/henriot/pexels-dan-cristian-p%C4%83dure%C8%9B-1476321_biws3r.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaRobot",
					title: "Robotics"
				},
				{
					icon: "BsPrinterFill",
					title: "3D Printing"
				},
				{
					icon: "FaBrain",
					title: "Autonomous Technology"
				},
				{
					icon: "FaCar",
					title: "Autonomous Vehicles"
				},
				{
					icon: "GiDeliveryDrone",
					title: "Aerial Drones"
				},
				{
					icon: "MdSendToMobile",
					title: "MaaS"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "30-50"
				},
				{
					key: "Inception",
					value: "Sept. 2014"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Tasha Keeney Sam Korus"
				},
			],
			description: {
				title: "Strategy decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in the US listed securities, including ADRs, of companies focused on autonomous technology and robotics. Companies within this strategy aim to capture the substantial benefits of new products and services associated with scientific research and technological break-throughs in energy storage, transportation, automation and manufacturing, and materials, among other industries.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Research processr,",
				normal:"driven by Henriot’s Open Research Ecosystem"
			},
		]
	},
	galacticAdventure: {
		banner: {
			title: "Galactic adventure",
			paragraph:"Seeks to provide exposure to companies involved in space-related businesses like reusable rockets, satellites, drones, and other orbital and sub-orbital aircrafts. These innovations should transform logistics, observation, agriculture, telecom, drones, and may even put humans on Mars.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Galactic adventure"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733717/henriot/pexels-pixabay-2159_vslozc.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Reusable Rockets"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Orbital Aerospace"
				},
				{
					icon: "FaTv",
					title: "Suborbital Aerospace"
				},
				{
					icon: "FaNetworkWired",
					title: "Aerial Drones"
				},
				{
					icon: "MdSendToMobile",
					title: "3D Printing"
				},
				{
					icon: "FaRobot",
					title: "Enabling Technology"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "30-50"
				},
				{
					key: "Inception",
					value: "Aug. 2018"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Sam Korus Tasha Keeney"
				},
			],
			description: {
				title: "Strategy Description",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on space exploration. What used to be a monopolistic and bureaucratic industry is being upended by both rocket and satellite cost declines. As a result of advancements within deep learning, mobile connectivity, sensors, 3D printing, and robotics, decades of ballooning costs have reversed trend and are beginning to decline, leading to a proliferation of satellite launches and rocket landings.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Research processr,",
				normal:"driven by Henriot’s Open Research Ecosystem"
			},
		]
	},
	siliconWadi: {
		banner: {
			title: "Silicon Wadi",
			paragraph:"Aims to provide targeted exposure to Israeli companies at the forefront of innovation across health care, manufacturing, communications, and information technology. These companies are working to enhance many sectors of the global economy.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Silicon Wadi"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733746/henriot/silicon_wadi_ee4csr.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Artificial Inteligence"
				},
				{
					icon: "FaTv",
					title: "Digital Media"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "3D Printring"
				},
				{
					icon: "FaNetworkWired",
					title: "eCommerce"
				},
				{
					icon: "MdSendToMobile",
					title: "Autonomous Technology"
				},
				{
					icon: "FaRobot",
					title: "Biotech"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Index Equity"
				},
				{
					key: "Typical # of Holding",
					value: "35-45"
				},
				{
					key: "Inception",
					value: "Sept. 2017"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Collective Team"
				},
			],
			description: {
				title: "Strategy Description",
				paragraphs: [
					`This index-based equity strategy seeks to provide investment results that closely correspond, before fees and expenses, to the performance of the Henriot Israeli Innovation Index, which is designed to track the price movements of exchange-listed Israeli companies whose main business operations are causing disruptive innovation in the areas of genomics, health care, biotechnology, industrials, manufacturing, the Internet or information technology. The Index includes equity securities and depositary receipts of exchange listed companies that are incorporated and/or domiciled in Israel (‘‘Israeli Companies’’) and are included in one of the following economic sectors as defined by FactSet Research Systems: (i) health technology, (ii) communications, (iii) technology services, (iv) electronic technology, (v) consumer services, or (vi) producer manufacturing.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Targeted Exposure ",
				normal:"to Israeli Innovation"
			},
			{
				bolded: "Equal ",
				normal:"market capitalization weighting"
			},
		]
	},
	digitalGold: {
		banner: {
			title: "Digital gold",
			paragraph:"Henriot believes public blockchains are powering novel forms of coordination across finance and the internet. The Investment Manager believes that cryptocurrency value and market share dynamics will be “power law distributed,” meaning that a few cryptocurrencies will capture the majority of value.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Digital gold"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733698/henriot/digital_gold_nptpwn.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBitcoin",
					title: "Cryptocurrencies"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active SMA"
				},
				{
					key: "Investment Manager",
					value: "Henriot Investment Management LLC"
				},
				{
					key: "Analysts",
					value: " Yassine Elmandjra"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`In addition to providing the foundation for digital money, public blockchains are powering novel forms of coordination across finance and the internet. By decentralizing institutions with open-source software, public blockchains minimize the need to trust centralized authorities. In finance, cryptoassets issued on public blockchains are facilitating the coordination of financial services and contracts outside the purview of traditional financial institutions. On the internet, cryptoassets issued on public blockchains are facilitating the coordination of identity, reputation, and data outside the purview of traditional media conglomerates and big tech. These forms of coordination are likely to impact all asset classes. Just as the internet turned information into packets online, we believe public blockchains are likely to turn all assets into transactions on-chain.`
				]
			}
		},
		characteristics: []
	},
	futureUnicorns: {
		banner: {
			title: "Future Unicorns",
			paragraph:"Aims to provide broad exposure to early-stage disruptors in the public markets. Henriot believes at the forefront of the innovation wave are “early-stage disruptors”— either newer public companies or companies that introduced new technologically-enabled products or services that are in the early stages of development.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Future Unicorms"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733701/henriot/future_unicorns_jdwipf.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Artificial Inteligence"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Autonomous Vehicles"
				},
				{
					icon: "FaTv",
					title: "Fintech"
				},
				{
					icon: "FaNetworkWired",
					title: "DNA Sequencing"
				},
				{
					icon: "MdSendToMobile",
					title: "Robotics"
				},
				{
					icon: "FaRobot",
					title: "3D Printing"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "25"
				},
				{
					key: "Inception",
					value: "Aug. 2021"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Collective Team"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on innovations within financial technology (“fintech”). Companies within this strategy are focused on changing the way the financial sector works, removing friction, and increasing accessibility to financial products and services.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Exposure to",
				normal:"Early Stage Disruptors"
			},
		]
	},
	onDemandMobility: {
		banner: {
			title: "On Demand Mobility",
			paragraph:"Aims to provide exposure to companies involved in self-driving vehicles, electric vehicles, autonomous ridesharing platforms, and aerial drones. These innovations should spur a transformative boost in economic productivity and subsume the traditional automotive industry.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "On Demand Mobility"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733708/henriot/on_demand_mobility_neoswu.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaTv",
					title: "Autonomous Technology"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Autonomous Vehicles"
				},
				{
					icon: "FaBrain",
					title: "Artificial Inteligence"
				},
				{
					icon: "FaNetworkWired",
					title: "New Infrastructure"
				},
				{
					icon: "MdSendToMobile",
					title: "Aerial Drones"
				},
				{
					icon: "FaRobot",
					title: "MaaS"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "30-50"
				},
				{
					key: "Inception",
					value: "Jan. 2017"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Tasha Keeney Sam Korus"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on mobility-as-a-service (MaaS). Companies within this strategy are focused on electric mobility and autonomous mobility-as-a-service and spans from personal MaaS, such as autonomous taxi platforms, to Logistics-as-a-Service, such as autonomous electric trucks, delivery drones, and delivery robots.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Research processr,",
				normal:"driven by Henriot’s Open Research Ecosystem"
			},
		]
	},
	sustainableInvestment: {
		banner: {
			title: "Sustainable Investment",
			paragraph:"Positive Change Innovation aims to incorporate companies most likely to deliver long-term capital growth and to positively impact global progress towards the UN SDGs.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Sustainable Investment"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Autonomous Vehicles"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Artificial Intelligence"
				},
				{
					icon: "FaTv",
					title: "MaaS"
				},
				{
					icon: "FaNetworkWired",
					title: "Gene Editing"
				},
				{
					icon: "MdSendToMobile",
					title: "Genomic Revolution"
				},
				{
					icon: "FaRobot",
					title: "Biotech"
				},
				{
					icon: "FaRobot",
					title: "Next Generation Internet"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "30-50"
				},
				{
					key: "Inception",
					value: "May 2021"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Collective Team"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy aims to incorporate companies most likely to deliver long-term capital growth and to positively impact global progress towards the UN SDGs. Henriot groups the SDGs into four major sustainable development themes. By dimensioning the impact that innovation could have on accelerating progress against these themes, Henriot seeks to identify companies most likely to deliver growth while positively impacting global progress.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Research processr,",
				normal:"driven by Henriot’s Open Research Ecosystem"
			},
		]
	},
	otherFunds: {
		banner: {
			title: "other funds",
			paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum interdum fringilla ligula, a porta mi viverra nec. Nullam vel ipsum ligula. Fusce vel metus venenatis, lobortis metus vitae, gravida magna. Vivamus accumsan, diam eu interdum fermentum, tortor est dignissim quam, vel consectetur sem lectus nec magna. Donec commodo ultrices porttitor. Morbi aliquet, eros non vulputate aliquet, purus odio accumsan risus, sit amet lacinia urna turpis nec diam. Etiam pharetra iaculis ex nec accumsan. Proin vel turpis at lectus ultrices tristique ac et lectus. Nam egestas, turpis vitae vulputate faucibus, leo sem vestibulum lectus, ac auctor nisi sem mollis velit. Duis lacinia sed ex tristique blandit. Etiam vitae ultricies purus. Aliquam sit amet nulla tortor. Phasellus pretium risus tortor, eu bibendum risus congue eu.",
			breadcrumbsItem: {
				items: [
					{
						label: "Home",
						link: "/landing/main"
					},
				],
				last: {
					label: "Other funds"
				}
			},
			dropDown: dropDown,
			image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1679733714/henriot/other_funds_jn5jvz.jpg"
		},
		focus: {
			icons: [
				{
					icon: "FaBrain",
					title: "Artificial Inteligence"
				},
				{
					icon: "FaCloudDownloadAlt",
					title: "Cloud computing"
				},
				{
					icon: "FaTv",
					title: "Digital Media"
				},
				{
					icon: "FaNetworkWired",
					title: "IoT"
				},
				{
					icon: "MdSendToMobile",
					title: "Mobile Payments"
				},
				{
					icon: "FaRobot",
					title: "Cloud computing"
				},
			],
			overview : [
				{
					key: "Type",
					value: "Active Equity"
				},
				{
					key: "Typical # of Holding",
					value: "35-50"
				},
				{
					key: "Inception",
					value: "Sept. 2014"
				},
				{
					key: "Portfolio Manager",
					value: "Catherine Wood"
				},
				{
					key: "Analysts",
					value: "Nick Grous Yassine Elmandjra"
				},
			],
			description: {
				title: "Decription",
				paragraphs: [
					`This actively managed equity strategy seeks long-term capital growth by investing in domestic and foreign equity securities of companies focused on innovations within financial technology (“fintech”). Companies within this strategy are focused on changing the way the financial sector works, removing friction, and increasing accessibility to financial products and services.`
				]
			}
		},
		characteristics: [
			{
				bolded: "Actively managed,",
				normal:"high conviction portfolio"
			},
			{
				bolded: "Cross sector,",
				normal:"geographies, and market capitalizations"
			},
			{
				bolded: "Benchmark agnostic,",
				normal:"with low overlap to broad market indicies"
			},
			{
				bolded: "Research processr,",
				normal:"driven by Henriot’s Open Research Ecosystem"
			},
		]
	},
}

export const options = [
	{
		label: "Market disruptor",
		reduxValue: investmentEquityData.marketDisruptor
	},
	{
		label: "DNA game-changer",
		reduxValue: investmentEquityData.dnaGameChanger
	},
	{
		label: "Finance frontier",
		reduxValue: investmentEquityData.financeFrontier
	},
	{
		label: "Future fabrication",
		reduxValue: investmentEquityData.futureFabrication
	},
	{
		label: "Crypto craze",
		reduxValue: investmentEquityData.cryptoCraze
	},
	{
		label: "Augmented reality",
		reduxValue: investmentEquityData.augmentedReality
	},
	{
		label: "Decentralized web 3.0",
		reduxValue: investmentEquityData.decentralizedWeb3
	},
	{
		label: "Intelligent machines",
		reduxValue: investmentEquityData.intelligentMachine
	},
	{
		label: "Galactic adventure",
		reduxValue: investmentEquityData.galacticAdventure
	},
	{
		label: "Silicon Wadi",
		reduxValue: investmentEquityData.siliconWadi
	},
	{
		label: "Digital gold",
		reduxValue: investmentEquityData.digitalGold
	},
	{
		label: "Future unicorns",
		reduxValue: investmentEquityData.futureUnicorns
	},
	{
		label: "On-demand mobility",
		reduxValue: investmentEquityData.onDemandMobility
	},
	{
		label: "Sustainable investment",
		reduxValue: investmentEquityData.sustainableInvestment
	},
]



//research blogs
export const researchBlogs = [
	{
		_id: "blog1",
		title: "Will Africa ever adapt to High Frequency Trading (HFT)",
		category: "Blog categody a",
		author: "Blog author",
		image: BlogImage,
		tags: ["Trading", "HFT", "Africa"],
		content: [
			{
				title: "",
				paragraphs:[
					`It is now possible to trade stocks at a high rate of speed without the involvement of a human. High-frequency trading (HFT) allows for rapid changes in a security position using current technology and the consequent meager latency rates. High-frequency trading is an example of algorithmic trading (HFT). Automated or algorithmic trading occurs on computers.`,
					`To determine when and how to execute a real-time trade-in algorithm has been pre-programmed and compared to other market data gathered from other sources. In his book "Dark Pools and High-Frequency Trading for Dummies," Jay Vaananen (2015) explains HFT well.`,
					`American regulators at the Securities and Exchange Commission (SEC) attribute HFT with the following features. Orders are generated, routed, and executed using highly complex and rapid computer algorithms. Data streams from exchanges and centralized servers are used to reduce delays.`,
					`Maintaining extremely short deadlines for opening and closing positions, resulting in a quick turnover of a large number of minor posts in one or more financial instruments. Several orders have been submitted; however, they have all been canceled shortly after being introduced. Keeping a small number of overnight positions, if any at all.`,
					`HFT arose as a result of Sec's approval of electronic exchanges in 1998. HFT trades had an execution time of several seconds by 2001. By 2010, it had decreased to milliseconds, even microseconds – a millionth of a second, or a fraction of a second, or faster than the blink of an eye. HFT was a little-known phenomenon outside of the financial sector for a long time, but a July 2009 piece in The New York Times was pivotal in introducing the topic to a broader audience.`,
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Should high-frequency trading be allowed?",
				paragraphs: [
					`On a wide range of worldwide markets, high-frequency trading has become increasingly popular due to the expansion of independent, proprietary trading firms and quantitative hedge fund methods. High-frequency trading (HFT) has changed the global financial sector. A recent study indicates that HFT makes about half of all trading volume on US and EU marketplaces. Globally and across asset classes, high-frequency trading (HFT) has multiplied during the past few years. However, HFT's attraction is gradually spreading beyond stocks.`,
					`As a result, HFT should be permitted in financial markets under new restrictions to promote greater transparency and lower market volatility while keeping the benefits of algorithmic trading and reducing possible hazards.`,
					`Stock exchanges must not offer co-location, and all trades must be conducted at the same speed as the investor's exchange (IEX). The IEX was created as a direct response to Wall Street's unequal and murky trading practices, including paying for a competitive edge through co-location. The IEX aspires to make stock trading more transparent and accessible to the general public.`,
					`In mid-2014, the Johannesburg Stock Exchange (JSE) began offering co-location to clients. Today, Hanna Ziady argues in a 2016 article: HFT: Co-location accounts for around 30% of the value exchanged in the cash equities market, which is far faster than previously assumed. An alternative view maintains that corporations will continue to gain from technological developments in the future, as high-frequency trading is seen as a natural stage in market growth.`,
					`To adopt HFT, Africa needs solid financial market legislation and infrastructure. With the arrival of 5G, Africa is left with limited options, necessitating to contemplate joining. Even though computers control about 80% of trades in South Africa, high-frequency trading (HFT) is still in its infancy. With African stock exchanges becoming more automated and regionally integrated, it's past time for them to investigate HFT seriously.`,
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Impact of high-frequency trading",
				paragraphs: [
					`According to Gur-Gershgoren (2013), algorithmic research provides significant advantages in terms of efficiency, liquidity, correct pricing, fairness, and stability. The study also discovered that algorithmic traders add to market liquidity. In times of low liquidity, and to a lesser extent during crisis periods, their contribution is much more significant. While HFT has many benefits, it also has its own set of obstacles. Since 2010, when the "May 6 Flash Crash" occurred 2010, HFT has come under fire. Dow Jones Industrial Average fell 600 points on May 6, 2010. This was known as the "May 6 Flash Crash." As a result, officials from all across the world have proposed legislation to limit current HFT operations. In a variety of ways, HFT has already had a significant impact on society and its investors. There is a positive and destructive impact.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Increased liquidity",
				paragraphs: [
					`HFT traders are supposed to boost market liquidity because of the large number of trades they execute. More than half of all equity turnover is generated by HFT businesses in specific big markets, and they play an essential role in order flow and liquidity enhancement. Traditional liquidity providers, such as market makers, can make up for the loss of money caused by lower spreads by using HFT strategies to collect rebate fees in a matter of seconds and then rebounding.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Market stability",
				paragraphs: [
					`While many people are concerned that high-frequency trading will harm market stability, a new academic study demonstrates that it helps. Concerns concerning HFT's relevance to excessive price volatility have been raised since the so-called flash collapse of 2010. When price spikes occur, HFT firms trade in the opposite direction, providing liquidity to non-high-frequency trading firms and promoting market stability by supplying liquidity. However, skeptics such as Joe Saluzzi claim that the study's inaccuracy was exacerbated by Nasdaq data and the use of only one asset class, stocks.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Narrowing spreads",
				paragraphs: [
					`Trading securities prices are updated more frequently and with higher precision than in the past due to algorithms and computers in the trading process. The quoted spreads between 2007 and 2009, when HFT was less prevalent, were less than those between 2002 and 2006. Traders are currently offering the most competitive bid-ask pricing, and the spread is closing due to high-frequency trading (HFT). Furthermore, the research demonstrates that HFT firms require more liquidity than they supply during regular times, but they supply more liquidity during times of financial stress.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Improved market efficiency",
				paragraphs: [
					`The price information is more rapidly and correctly reflected in more efficient markets. Due to high-frequency trading (HFT), accurate pricing can be achieved in shorter periods. These factors have reduced spreads and trading costs that help average investors who invest in the markets via mutual and pension fund investments. In a Forbes article from 2014 titled "HFT explained simply," Bill Conerly claims that HFT is secretive and intriguing, but not wicked. It improves the efficiency of the stock market and aids small investors who trade at different times throughout the day.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Increased fees for exchanges",
				paragraphs: [
					`Exchange and electronic communications network trading volumes have risen dramatically as a result of HFT (ECNs). There were more than eighty percent more equities trading in 2008 than there were in 2007, according to the New York Stock Exchange and the Nasdaq. As a result of this expansion, both exchanges and ECNs saw an increase in revenue and transaction fees.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Impact on Institutional investors",
				paragraphs: [
					`By identifying order flow, specific HFT algorithms, for example, look for repeated patterns of trade. That security is then bought and sold at a higher price by the HFT system. A negative impact of HFT methods on institutional investors' strategies and expenses is possible.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Increased volatility",
				paragraphs: [
					`As a result of this expansion, both exchanges and ECNs saw an increase in revenue and transaction fees. Because HFT accounts for a considerable portion of overall trading, its price movements can significantly impact the market's volatility. Another concern is that executing deals and promptly canceling them to drive automated buying from other firms is unethical. The larger the bid-ask spread is, the more volatile the stock price is. By shielding market makers from negative news while they retain their positions, HFTs tend to narrow the bid-ask spread. As a result, trading costs are reduced.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Disadvantages to the smaller investors",
				paragraphs: [
					`Smaller enterprises and retail investors cannot access unique services, such as co-location facilities and raw data feeds, due to a lack of resources. Deprived due to this, these smaller businesses and investors several high-frequency traders solely trade for the liquidity rebate, which is of little use to the retail or long-term investor.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Algorithmic terrorism",
				paragraphs: [
					`HFT appears to be a haven for prospective terrorists and criminals as cyber-threats and terrorism have expanded, as has the usage of algorithms in the financial markets. It was written by Nick Baumann and published in Mother Jones in 2013. Isn't it possible that a malicious programmer could write a malicious program? Computing expert and inventor of complex trading algorithms, John Bates is concerned that his inventions could slip into the wrong hands in the early 2000s. An algo-based terrorist or criminal organization could utilize algorithms to cause a major financial catastrophe, and these fears are not without merit. National security should be concerned about this situation, leading to a civilizational disaster and profit for the bad guys.`,
					`His 2014 book Flash Boys: A Wall Street Revolt takes a more comprehensive look at the beginnings of high-frequency trading. This is a must-read book for both traders and stock exchange regulators. Lewis claims that the market is "rigged" in favor of high-frequency traders in his book. In an article titled "Will high-frequency traders create market crashes?" Sasha Planting2015 claims that HFT has appeared out of nowhere. With the arrival of computerized trading in the 1970s, it began to evolve. By the 1980s, program trading between the S&P500equity and futures markets was commonplace. The JSE used electronic trading for the first time in 1996. Stock exchange floor "open outcry" was no more. Due to research that showed that algorithms might outperform human traders by 2001, algorithmic trading has gained much attention. Finally, given the growth of technology in financial markets, HFT is vital and should be permitted. However, to avoid potential hazards and misuse, their duties must be strictly regulated. Authorities claim that high-frequency trading (HFT) has become established in global market architecture.`,
					`Over half of the trading volume in the US and EU is attributed to high-frequency traders (HFTs). Last year, the popularity of hedge fund trading increased in the United States and around the world. HFT has grown in importance in terms of efficiency, liquidity, fairness, and stability. Finance market developments should not be hidden from Africa.`,
				],
				list: {
					title: "",
					items: []
				}
			},
		]
	},
	{
		_id: "blog2",
		title: "Will Africa ever adapt to High Frequency Trading (HFT)",
		category: "Blog categody a",
		author: "Blog author",
		image: BlogImage,
		tags: ["Trading", "HFT", "Africa"],
		content: [
			{
				title: "",
				paragraphs:[
					`It is now possible to trade stocks at a high rate of speed without the involvement of a human. High-frequency trading (HFT) allows for rapid changes in a security position using current technology and the consequent meager latency rates. High-frequency trading is an example of algorithmic trading (HFT). Automated or algorithmic trading occurs on computers.`,
					`To determine when and how to execute a real-time trade-in algorithm has been pre-programmed and compared to other market data gathered from other sources. In his book "Dark Pools and High-Frequency Trading for Dummies," Jay Vaananen (2015) explains HFT well.`,
					`American regulators at the Securities and Exchange Commission (SEC) attribute HFT with the following features. Orders are generated, routed, and executed using highly complex and rapid computer algorithms. Data streams from exchanges and centralized servers are used to reduce delays.`,
					`Maintaining extremely short deadlines for opening and closing positions, resulting in a quick turnover of a large number of minor posts in one or more financial instruments. Several orders have been submitted; however, they have all been canceled shortly after being introduced. Keeping a small number of overnight positions, if any at all.`,
					`HFT arose as a result of Sec's approval of electronic exchanges in 1998. HFT trades had an execution time of several seconds by 2001. By 2010, it had decreased to milliseconds, even microseconds – a millionth of a second, or a fraction of a second, or faster than the blink of an eye. HFT was a little-known phenomenon outside of the financial sector for a long time, but a July 2009 piece in The New York Times was pivotal in introducing the topic to a broader audience.`,
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Should high-frequency trading be allowed?",
				paragraphs: [
					`On a wide range of worldwide markets, high-frequency trading has become increasingly popular due to the expansion of independent, proprietary trading firms and quantitative hedge fund methods. High-frequency trading (HFT) has changed the global financial sector. A recent study indicates that HFT makes about half of all trading volume on US and EU marketplaces. Globally and across asset classes, high-frequency trading (HFT) has multiplied during the past few years. However, HFT's attraction is gradually spreading beyond stocks.`,
					`As a result, HFT should be permitted in financial markets under new restrictions to promote greater transparency and lower market volatility while keeping the benefits of algorithmic trading and reducing possible hazards.`,
					`Stock exchanges must not offer co-location, and all trades must be conducted at the same speed as the investor's exchange (IEX). The IEX was created as a direct response to Wall Street's unequal and murky trading practices, including paying for a competitive edge through co-location. The IEX aspires to make stock trading more transparent and accessible to the general public.`,
					`In mid-2014, the Johannesburg Stock Exchange (JSE) began offering co-location to clients. Today, Hanna Ziady argues in a 2016 article: HFT: Co-location accounts for around 30% of the value exchanged in the cash equities market, which is far faster than previously assumed. An alternative view maintains that corporations will continue to gain from technological developments in the future, as high-frequency trading is seen as a natural stage in market growth.`,
					`To adopt HFT, Africa needs solid financial market legislation and infrastructure. With the arrival of 5G, Africa is left with limited options, necessitating to contemplate joining. Even though computers control about 80% of trades in South Africa, high-frequency trading (HFT) is still in its infancy. With African stock exchanges becoming more automated and regionally integrated, it's past time for them to investigate HFT seriously.`,
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Impact of high-frequency trading",
				paragraphs: [
					`According to Gur-Gershgoren (2013), algorithmic research provides significant advantages in terms of efficiency, liquidity, correct pricing, fairness, and stability. The study also discovered that algorithmic traders add to market liquidity. In times of low liquidity, and to a lesser extent during crisis periods, their contribution is much more significant. While HFT has many benefits, it also has its own set of obstacles. Since 2010, when the "May 6 Flash Crash" occurred 2010, HFT has come under fire. Dow Jones Industrial Average fell 600 points on May 6, 2010. This was known as the "May 6 Flash Crash." As a result, officials from all across the world have proposed legislation to limit current HFT operations. In a variety of ways, HFT has already had a significant impact on society and its investors. There is a positive and destructive impact.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Increased liquidity",
				paragraphs: [
					`HFT traders are supposed to boost market liquidity because of the large number of trades they execute. More than half of all equity turnover is generated by HFT businesses in specific big markets, and they play an essential role in order flow and liquidity enhancement. Traditional liquidity providers, such as market makers, can make up for the loss of money caused by lower spreads by using HFT strategies to collect rebate fees in a matter of seconds and then rebounding.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Market stability",
				paragraphs: [
					`While many people are concerned that high-frequency trading will harm market stability, a new academic study demonstrates that it helps. Concerns concerning HFT's relevance to excessive price volatility have been raised since the so-called flash collapse of 2010. When price spikes occur, HFT firms trade in the opposite direction, providing liquidity to non-high-frequency trading firms and promoting market stability by supplying liquidity. However, skeptics such as Joe Saluzzi claim that the study's inaccuracy was exacerbated by Nasdaq data and the use of only one asset class, stocks.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Narrowing spreads",
				paragraphs: [
					`Trading securities prices are updated more frequently and with higher precision than in the past due to algorithms and computers in the trading process. The quoted spreads between 2007 and 2009, when HFT was less prevalent, were less than those between 2002 and 2006. Traders are currently offering the most competitive bid-ask pricing, and the spread is closing due to high-frequency trading (HFT). Furthermore, the research demonstrates that HFT firms require more liquidity than they supply during regular times, but they supply more liquidity during times of financial stress.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Improved market efficiency",
				paragraphs: [
					`The price information is more rapidly and correctly reflected in more efficient markets. Due to high-frequency trading (HFT), accurate pricing can be achieved in shorter periods. These factors have reduced spreads and trading costs that help average investors who invest in the markets via mutual and pension fund investments. In a Forbes article from 2014 titled "HFT explained simply," Bill Conerly claims that HFT is secretive and intriguing, but not wicked. It improves the efficiency of the stock market and aids small investors who trade at different times throughout the day.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Increased fees for exchanges",
				paragraphs: [
					`Exchange and electronic communications network trading volumes have risen dramatically as a result of HFT (ECNs). There were more than eighty percent more equities trading in 2008 than there were in 2007, according to the New York Stock Exchange and the Nasdaq. As a result of this expansion, both exchanges and ECNs saw an increase in revenue and transaction fees.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Impact on Institutional investors",
				paragraphs: [
					`By identifying order flow, specific HFT algorithms, for example, look for repeated patterns of trade. That security is then bought and sold at a higher price by the HFT system. A negative impact of HFT methods on institutional investors' strategies and expenses is possible.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Increased volatility",
				paragraphs: [
					`As a result of this expansion, both exchanges and ECNs saw an increase in revenue and transaction fees. Because HFT accounts for a considerable portion of overall trading, its price movements can significantly impact the market's volatility. Another concern is that executing deals and promptly canceling them to drive automated buying from other firms is unethical. The larger the bid-ask spread is, the more volatile the stock price is. By shielding market makers from negative news while they retain their positions, HFTs tend to narrow the bid-ask spread. As a result, trading costs are reduced.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Disadvantages to the smaller investors",
				paragraphs: [
					`Smaller enterprises and retail investors cannot access unique services, such as co-location facilities and raw data feeds, due to a lack of resources. Deprived due to this, these smaller businesses and investors several high-frequency traders solely trade for the liquidity rebate, which is of little use to the retail or long-term investor.`
				],
				list: {
					title: "",
					items: []
				}
			},
			{
				title: "Algorithmic terrorism",
				paragraphs: [
					`HFT appears to be a haven for prospective terrorists and criminals as cyber-threats and terrorism have expanded, as has the usage of algorithms in the financial markets. It was written by Nick Baumann and published in Mother Jones in 2013. Isn't it possible that a malicious programmer could write a malicious program? Computing expert and inventor of complex trading algorithms, John Bates is concerned that his inventions could slip into the wrong hands in the early 2000s. An algo-based terrorist or criminal organization could utilize algorithms to cause a major financial catastrophe, and these fears are not without merit. National security should be concerned about this situation, leading to a civilizational disaster and profit for the bad guys.`,
					`His 2014 book Flash Boys: A Wall Street Revolt takes a more comprehensive look at the beginnings of high-frequency trading. This is a must-read book for both traders and stock exchange regulators. Lewis claims that the market is "rigged" in favor of high-frequency traders in his book. In an article titled "Will high-frequency traders create market crashes?" Sasha Planting2015 claims that HFT has appeared out of nowhere. With the arrival of computerized trading in the 1970s, it began to evolve. By the 1980s, program trading between the S&P500equity and futures markets was commonplace. The JSE used electronic trading for the first time in 1996. Stock exchange floor "open outcry" was no more. Due to research that showed that algorithms might outperform human traders by 2001, algorithmic trading has gained much attention. Finally, given the growth of technology in financial markets, HFT is vital and should be permitted. However, to avoid potential hazards and misuse, their duties must be strictly regulated. Authorities claim that high-frequency trading (HFT) has become established in global market architecture.`,
					`Over half of the trading volume in the US and EU is attributed to high-frequency traders (HFTs). Last year, the popularity of hedge fund trading increased in the United States and around the world. HFT has grown in importance in terms of efficiency, liquidity, fairness, and stability. Finance market developments should not be hidden from Africa.`,
				],
				list: {
					title: "",
					items: []
				}
			},
		]
	},
]
import { FaBrain, FaCloudDownloadAlt, FaNetworkWired, FaTv, FaRobot } from "react-icons/fa";
import { MdSendToMobile } from "react-icons/md";

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

export const otherFunds = {
	strategy: "Other funds",
	banner: {
		title: "The big title here",
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
		image: "https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg"
	}
}

const styledIcons = {
	fontSize:"50px"
}

export const focus = {
	icons: [
		{
			icon: <FaBrain style={styledIcons}/>,
			title: "Artificial Inteligence"
		},
		{
			icon: <FaCloudDownloadAlt style={styledIcons}/>,
			title: "Cloud computing"
		},
		{
			icon: <FaTv style={styledIcons}/>,
			title: "Digital Media"
		},
		{
			icon: <FaNetworkWired style={styledIcons}/>,
			title: "IoT"
		},
		{
			icon: <MdSendToMobile style={styledIcons}/>,
			title: "Mobile Payments"
		},
		{
			icon: <FaRobot style={styledIcons}/>,
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
}

//characteristics
export const characteristics = [
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
		normal:"driven by ARK’s Open Research Ecosystem"
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
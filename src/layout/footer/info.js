import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const privacyPolicy = [
	`
		This site is not intended for use in jurisdictions in which the trading or investments described are prohibited and should only be used by such persons and in such ways as are legally permitted.
	`,
	`
	Your investment may not qualify for investor protection in your country or state of residence, so please conduct your own due diligence. This website is free for you to use but we may receive a commission from the companies we feature on this site FTC Compliance. All forms of trading carry a high level of risk so you should only speculate with money you can afford to lose. You can lose more than your initial deposit and stake. Please ensure your method matches your investment objectives, study the risks involved and if necessary seek independent advice. Henriot Investment Management will not accept any liability for loss or damage as a result of reliance on the information contained within this website including data, quotes, charts, and buy/sell setups (may be interpreted as signals are meant only as a reading of the indicators and system rules). Remember the risk of trading Forex & CFD – it’s one of the riskiest forms of investment. Risk warning: Trading foreign exchange or contracts for differences in margin carries a high level of risk and may not be suitable for all investors. You should ensure you understand all of the risks. Before using Henriot's services please acknowledge the risks associated with trading. Remember that software’s past performance does not ensure future results and you may lose some or all of your invested capital. Therefore, do not risk the capital you can not afford to lose.
	`,
];

export const footerParagraph = [
	`Henriot Investment Management (Investment fund) is alternative investment fund designed for Professional or Informed investors only and supervised by the Capital Markets Authority. The information contained in this webpage does not constitute a solicitation or offer to invest in any financial products. It does not constitute legal or fiscal advice nor does it provide specific investment advice.`,
	`Detailed information about the fund can be found in the fund’s rules, prospectus and Key investor information document that can be obtained from HG Asset Management. The data has been compiled from sources deemed reliable and is accurate to the best of our knowledge; however, we accept no obligation whatsoever from the information given in this webpage.`,
	`HG Asset Management assumes no (direct or indirect) liability for any losses which result from the data and information published herein. The offering and sale of the products described in this webpage is legally restricted in certain jurisdictions. Persons who are subordinate to such jurisdictions have to inform themselves about such restrictions and must adhere to them. `,
	`The prices stated are net of all fees; front load and taxes have not been taken into account. The potential for high returns of this investment strategy is combined with significant risks. Even a total loss of the invested capital is possible. Performance from the past is no guarantee of future results. Funds management company is not liable for the losses of the fund suffered due to the fluctuations of financial markets. It is strongly recommended to overview Fund's Prospect and Articles of Association before making a decision to invest in the Fund.`,
];

const styledIcon = {
	fontSize: "16px",
};

export const footerSocialMedia = [
	{
		icon: <FaFacebook style={styledIcon} />,
		link: "https://www.facebook.com",
	},
	{
		icon: <FaTwitter style={styledIcon} />,
		link: "https://twitter.com/",
	},
	{
		icon: <FaInstagram style={styledIcon} />,
		link: "https://www.instagram.com/",
	},
	{
		icon: <FaLinkedin style={styledIcon} />,
		link: "https://www.linkedin.com/",
	},
];

export const footerItems = [
	{
		title: "Quant funds",
		items: [
			{
				path: "/landing/exchange",
				label: "FX Funds",
			},
			{
				path: "/landing/cec",
				label: "CEC Funds",
			},
			{
				path: "/landing/diverse",
				label: "Diverse Funds",
			},
		],
	},
	{
		title: "Investment Solution",
		items: [
			{
				path: "/landing/investment-solutions/forex",
				label: "Forex",
			},
			{
				path: "/landing/investment-solutions/equity",
				label: "Equity",
			},
			{
				path: "/landing/investment-solutions/structures-products",
				label: "Sctructured Product",
			},
			{
				path: "/landing/investment-solutions/portfolios",
				label: "Portfolio",
			},
		],
	},
	{
		title: "Resources",
		items: [
			{
				path: "/landing/resources/news",
				label: "News",
			},
			{
				path: "/landing/resources/news",
				label: "REsearch",
			},
			{
				path: "/landing/resources/news",
				label: "Learn",
			},
		],
	},
	{
		title: "Company",
		items: [
			{
				path: "/landing/company/overview",
				label: "Overview",
			},
			{
				path: "/landing/company/faq",
				label: "FAQ",
			},
			{
				path: "/landing/company/careers",
				label: "Careers",
			},
		],
	},
];

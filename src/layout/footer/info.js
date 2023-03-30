import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const privacyPolicy = [
	`
		You are strongly advised to obtain independent financial, legal, and tax advice 
		before proceeding with any currency or spot metals trade. Nothing in this site 
		should be read or construed as constituting advice on the part of The Henriot Group, 
		or any of its affiliates, directors, officers, or employees. 
	`,
	`
		By accessing this site, you agree that the laws of the Republic of Seychelles, 
		without regard to Conflict of Laws principles thereof, will apply to all matters 
		relating to the use of this site. In case of a dispute, you agree to the exclusive 
		jurisdiction of the Courts of the Republic of Seychelles.
	`
]

export const footerParagraph = [
	`Henriot Investment Management (Investment fund) is alternative investment fund designed for Professional or Informed investors only and supervised by the Capital Markets Authority. The information contained in this webpage does not constitute a solicitation or offer to invest in any financial products. It does not constitute legal or fiscal advice nor does it provide specific investment advice.`,
	`Detailed information about the fund can be found in the fund’s rules, prospectus and Key investor information document that can be obtained from HG Asset Management. The data has been compiled from sources deemed reliable and is accurate to the best of our knowledge; however, we accept no obligation whatsoever from the information given in this webpage.`,
	`HG Asset Management assumes no (direct or indirect) liability for any losses which result from the data and information published herein. The offering and sale of the products described in this webpage is legally restricted in certain jurisdictions. Persons who are subordinate to such jurisdictions have to inform themselves about such restrictions and must adhere to them. `,
	`The prices stated are net of all fees; front load and taxes have not been taken into account. The potential for high returns of this investment strategy is combined with significant risks. Even a total loss of the invested capital is possible. Performance from the past is no guarantee of future results. Funds management company is not liable for the losses of the fund suffered due to the fluctuations of financial markets. It is strongly recommended to overview Fund's Prospect and Articles of Association before making a decision to invest in the Fund.`,

]

const styledIcon = {
	fontSize: "16px"
}

export const footerSocialMedia = [
	{
		icon: <FaFacebook style={styledIcon}/>,
		link: "https://www.facebook.com"
	},
	{
		icon: <FaTwitter style={styledIcon}/>,
		link: "https://twitter.com/"
	},
	{
		icon: <FaInstagram style={styledIcon}/>,
		link: "https://www.instagram.com/"
	},
	{
		icon: <FaLinkedin style={styledIcon}/>,
		link: "https://www.linkedin.com/"
	},
]

export const footerItems = [
	{
		title: "Quant funds",
		items: [
			{
				path: "/landing/exchange",
				label: "FX Funds"
			},
			{
				path: "/landing/cec",
				label: "CEC Funds"
			},
			{
				path: "/landing/diverse",
				label: "Diverse Funds"
			},
		]
	},
	{
		title: "Investment Solution",
		items: [
			{
				path: "/landing/investment-solutions/forex",
				label: "Forex"
			},
			{
				path: "/landing/investment-solutions/equity",
				label: "Equity"
			},
			{
				path: "/landing/investment-solutions/structures-products",
				label: "Sctructured Product"
			},
			{
				path: "/landing/investment-solutions/portfolios",
				label: "Portfolio"
			},
		]
	},
	{
		title: "Resources",
		items: [
			{
				path: "/landing/resources/news",
				label: "News"
			},
			{
				path: "/landing/resources/news",
				label: "REsearch"
			},
			{
				path: "/landing/resources/news",
				label: "Learn"
			},
		]
	},
	{
		title: "Company",
		items: [
			{
				path: "/landing/company/overview",
				label: "Overview"
			},
			{
				path: "/landing/company/faq",
				label: "FAQ"
			},
			{
				path: "/landing/company/careers",
				label: "Careers"
			},
		]
	},
]
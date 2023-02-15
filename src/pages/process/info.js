import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export const paragraphSection = [
	`
		Innovation, according to Henriot, discovers firms that will favorably impact the world in the future. 
		Henriot's investment team is committed to incorporating environmental, social, and governance (ESG) problems into the investing process.
	`,
	`
		Henriot's investment method and philosophy consider environmental, social, and governance (ESG) 
		factors in line with the Sustainable Development Goals (SDGs) of the United Nations. 
		Innovation has the potential to boost overall economic development, alleviate income inequality, enhance corporate processes, and even help protect the environment.
	`
]

const iconStyles = {}
const contentBoxStyle = {
	background: "#DFE3E8"
}

const arrowStyle = { borderRight: "#DFE3E8" }

export const timelineItems = [
	{
		title: "Top-Down: Ideation",
		paragraphs:[
			`
				Research and investment at Henriot begin with a top-to-bottom examination of the world's 
				evolving trends and where they are likely to take us. Henriot uses an open research ecosystem 
				to acquire knowledge on rapidly changing innovation topics, 
				which aids in defining and refining the company's internal research process.
			`,
			`
				These include experts in their areas, social media exchanges, and responses to Henriot's 
				public research.
			`
		],
		images: "",
		icon: <FaArrowDown style ={iconStyles}/>,
		contentStyle: contentBoxStyle,
		arrowStyle:arrowStyle
	},
	{
		title: "Top-Down: Sizing The Opportunity",
		paragraphs:[
			`
				It takes Henriot years of iterative research to predict and quantify 
				long-term value chain changes and market opportunities. 
				Technology-enabled disruption can be detected via Henriot's model of cost 
				curves and calculations of demand elasticity. At this point, we begin our 
				bottom-up approach, which identifies the firms that are most likely to profit.
			`
		],
		images: "",
		icon: <FaArrowDown style ={iconStyles}/>,
		contentStyle: contentBoxStyle,
		arrowStyle:arrowStyle
	},
	{
		title: "Bottom-Up: Stock Selection And Valuation",
		paragraphs:[
			`
				When Henriot does his bottom-up analysis, he starts with a small 
				subset of possible investments rather than a standard. Henriot analyses 
				possible investments using key indicators to quantify the businesses based on the 
				possibility.
			`,
			`
				Over the next five years, this will include developing a 
				value and revenue model for each company in the portfolio. 
				These models consider the company's unit volume growth; cost decreases, 
				market acceptance, penetration, share count increase, and future multiples. 
				All investment choices are ultimately Ken's to make since he serves as the company's 
				Chief Investment Officer and portfolio manager.
			`
		],
		images: "",
		icon: <FaArrowUp style ={iconStyles}/>,
		contentStyle: contentBoxStyle,
		arrowStyle:arrowStyle
	},
	{
		title: "Bottom-Up: Portfolio and Risk Management",
		paragraphs:[
			`
				During weekly portfolio and research meetings, Henriot closely checks each 
				company's fundamental investment thesis.
			`,
			`
				(i) We take advantage of opportunities created by short-term negative market 
				actions or market sentiment;
			`,
			`
				(ii) provide liquidity to invest in companies in which Henriot has a 
				greater degree of confidence;
			`,
			`
				or (iii) fund names that Henriot believes 
				offer a relatively greater market opportunity relative to the current price. 
				For example, suppose Henriot's measurements don't support a specific size or 
				consider that a firm is no longer on the cutting edge of innovation. 
				In that case, we may decide to sell the company. An Open Research Ecosystem 
				Fuels Henriot's Investment Process
			`
		],
		images: "",
		icon: <FaArrowUp style ={iconStyles}/>,
		contentStyle: contentBoxStyle,
		arrowStyle:arrowStyle
	},
]
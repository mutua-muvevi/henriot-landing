import investmentEquityTypes from "../types/equity";
import { investmentEquityData } from "../../pages/investment/equities/info";

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



const initialState = {
	data: {
		label: "Market Disruptor",
		reduxValue: investmentEquityData.marketDisruptor
	},
}

const investmentEquityReducer = (state = initialState, {type, payload}) => {
	switch(type){
		case investmentEquityTypes.SELECT_EQUITY_DATA: 
			return {
				data: payload
			}
		// case investmentEquityTypes.SELECT_DNA_GAME_CHANGER: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_FINANCE_FRONTIER: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_FUTURE_FABRICATION: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_AUGMENTED_REALITY: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_DECENTRALIZED_WEB_3: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_INTELIGENT_MACHINES: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_GALACTIC_ADVENTURE: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_SILICON_WADI: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_DIGITAL_GOLD: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_FUTURE_UNICORNS: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_ON_DEMAND_MOBILITY: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_SUSTAINABLE_INVESTMENT: 
		// 	return {
		// 		data: payload
		// 	}
		// case investmentEquityTypes.SELECT_OTHER_FUNDS: 
		// 	return {
		// 		data: payload
		// 	}
		default: 
			return state
	}
}

export default investmentEquityReducer
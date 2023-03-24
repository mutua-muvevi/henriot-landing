import investmentEquityTypes from "../types/equity";
import { investmentEquityData } from "../../pages/investment/equities/info";


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
		default: 
			return state
	}
}

export default investmentEquityReducer
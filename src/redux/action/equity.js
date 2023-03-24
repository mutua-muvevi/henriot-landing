import investmentEquityTypes from "../types/equity";

export const chooseData = (data) => ({
	type: investmentEquityTypes.SELECT_EQUITY_DATA,
	payload: data
});

//functions
export const selectData = (data) => {
	return (dispatch) => {
		try {
			console.log(data)
			dispatch(chooseData(data))
		} catch (error) {
			dispatch(chooseData(error))
		}
	}
}
import articleTypes from "../types/article";

export const chooseData = (article) => ({
	type: articleTypes.SELECT_SINGLE_ARTICLE,
	payload: article
});

//functions
export const selectData = (article) => {
	return (dispatch) => {console.log("action", article)
		try {
			dispatch(chooseData(article))
		} catch (error) {
			dispatch(chooseData(error))
		}
	}
}
import articleTypes from "../types/article";


const initialState = {
	article: {},
}

const articleReducer = (state = initialState, {type, payload}) => {
	console.log("payload",payload)
	switch(type){
		case articleTypes.SELECT_SINGLE_ARTICLE: 
			return {
				article: payload
			}
		default: 
			return state
	}
	
}

export default articleReducer
import contactTypes from "../types/contact";


const initialState = {
	loading: false,

	contact:null,
	contactError: null,
}

const contactReducer = (state = initialState, {type, payload}) => {
	switch(type){
		case contactTypes.START_POST_CONTACT_MESSAGE: 
			return {
				article: payload
			}
		case contactTypes.SUCCESS_POST_CONTACT_MESSAGE: 
			return {
				article: payload
			}
		case contactTypes.FAIL_POST_CONTACT_MESSAGE: 
			return {
				article: payload
			}
		default: 
			return state
	}
	
}

export default contactReducer
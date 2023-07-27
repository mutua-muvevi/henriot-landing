import contactTypes from "../types/contact";
import axios from "axios";


export const postContactMessageStart = () => ({
	type: contactTypes.START_POST_CONTACT_MESSAGE
})

export const postContactMessageSuccess = (message) => ({
	type: contactTypes.SUCCESS_POST_CONTACT_MESSAGE,
	payload: message,
})

export const postContactMessageFail = (errMessage) => ({
	type: contactTypes.FAIL_POST_CONTACT_MESSAGE,
	payload: errMessage,
});


export const postContactMessage = (values) => {
	return async (dispatch) => {
		try {console.log("Values", values)
			const res = await axios.post(
				// `http://localhost:8100/api/contact/send`,
				`https://henriotgroup.onrender.com/api/user/fetch/me`,
				values,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			)
			postContactMessageStart()
			dispatch(postContactMessageSuccess(res.data.data))
		} catch (error) {
			dispatch(postContactMessageFail(error.response))
		}
	}
}
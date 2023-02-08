import { Link } from "react-router-dom";

const renderLink = () => {
	return (
		<Link to="/privacy-policy">
			Privacy Policy
		</Link>
	)
}

export const LeftSideInfo = [
	`
		We're committed to your privacy. Henriot uses the information you provide to us only to contact you about relevant content, 
		products, and services. You may unsubscribe from these communications at any time. For more information, check out our ${renderLink()}.
	`,
	`
		By clicking submit, you consent to our privacy policy and allow Henriot to store and process your information submitted
		above to provide you with the content requested.
	`
]

export const formItems = [
	{
		name:"firstname",
		category: "textfield",
		type:"text",
		label:"First name",
		placeHolder:"eg. Julia",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:6,
		xl:6
	},
	{
		name:"lastname",
		category: "textfield",
		type:"text",
		label:"Last name",
		placeHolder:"eg. Johnson",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:6,
		xl:6
	},
	{
		name:"email",
		category: "textfield",
		type:"email",
		label:"Email",
		placeHolder:"email@something.com",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12
	},
	{
		name:"phone",
		category: "textfield",
		type:"text",
		label:"Phone",
		placeHolder:"eg. Johnson",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12
	},
	{
		name:"address",
		category: "textfield",
		type:"text",
		label:"Address",
		placeHolder:"Address",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12
	},
	{
		name:"description",
		category: "selectfield",
		type:"text",
		label:"Description",
		placeHolder:"eg. Johnson",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12,
		options: [
			{ Name: "Individual Investor" },
			{ Name: "Advisor" },
			{ Name: "Institution Investor" },
		]
	},
	{
		name:"foreign_exchange_fund",
		category: "checkbox",
		type:"text",
		label:"Foreign Exchange Fund",
		placeHolder:"Foreign Exchange Fund",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12
	},
	{
		name:"cec_fund",
		category: "checkbox",
		type:"text",
		label:"CEC Fund",
		placeHolder:"CEC Fund",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12
	},
	{
		name:"diverse_fund",
		category: "checkbox",
		type:"text",
		label:"Diverse Fund",
		placeHolder:"Diverse Fund",
		required: true,
		xs:12,
		sm:12,
		md:12,
		lg:12,
		xl:12
	},
]
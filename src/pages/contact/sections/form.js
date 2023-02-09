import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import CheckboxField from "../../../components/formui/checkbox/checkbox";
import SelectField from "../../../components/formui/select/select";
import TextFieldWrapper from "../../../components/formui/textfield/textfield";

import { formItems, LeftSideInfo } from "../info";


const INITIAL_FORM_STATE = {
	firstname:"",
	lastname:"",
	email:"",
	phone:"",
	address:"",
	description:"",
	foreign_exchange_fund:"",
	cec_fund:"",
	diverse_fund:"",
}

const FORM_VALIDATION = Yup.object().shape({
	firstname: Yup.string().required("Please add your firstname").min(3).max(100),
	lastname: Yup.string().required("Please add your lastname").min(3).max(100),
	email: Yup.string().required("Please add your email").min(3).max(100).email("Please add a valid email"),
	phone: Yup.string().required("Please add your telephone number").min(3).max(100),
	address: Yup.string().required("Please add your address").min(3).max(100),
	description: Yup.string().required("Please add your description").min(3).max(100),
	foreign_exchange_fund: Yup.boolean(),
	cec_fund: Yup.boolean(),
	diverse_fund: Yup.boolean(),
})

const StyledContactForm = styled(Box)(({ theme }) => ({
	
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	color: "#fff",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	textAlign: "center",
	alignItems: "center",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const ContactForm = () => {

	const submitHandler = (values) => {
		console.log(values)
	}

	return (
		<StyledContactForm>
			<StyledContainer maxWidth="xl">
				<StyledGrid container spacing={3}>
					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Stack direction="column" alignItems="flex-start" textAlign="left" justifyContent="flex-start" spacing={3}>
							<Typography variant="h3" color="text.primary">
								Let's communicate
							</Typography>
							{
								LeftSideInfo.map((el, i) => (
									<Typography key={i} variant="body1" color="text.primary">
										{el}
									</Typography>
								))
							}
						</Stack>
					</StyledGridItem>
					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Formik
							initialValues={{
								...INITIAL_FORM_STATE
							}}
							validationSchema={ FORM_VALIDATION }
							onSubmit = {submitHandler}
						>
							<Form>
								<Grid container spacing={3}>
									{
										formItems.map((el, i) => (
												<Grid key={i} item xs={el.xs} sm={el.sm} md={el.md} lg={el.lg} xl={el.xl}>
													<Stack sx={{width:"100%"}} direction="row" justifyContent="flex-start" alignItems="center">
														{
															el.category === "selectfield" ? (
																<SelectField
																	name={el.name}
																	type={el.type}
																	label={el.label}
																	placeholder={el.placeHolder}
																	options={el.options}
																/>
																
															) :
															el.category === "checkbox" ? (
																<CheckboxField
																	label={el.label}
																	name={el.name}
																/>
															) : (				
																	<TextFieldWrapper
																		name={el.name}
																		type={el.type}
																		label={el.label}
																		placeholder={el.placeHolder}
																	/>
															)
														}
													</Stack>
												</Grid>
											))
									}

									<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
										<Stack sx={{width:"100%"}} direction="row" justifyContent="flex-start" alignItems="center">
											<Button variant="contained" type="submit">
												Submit
											</Button>
										</Stack>
									</Grid> 
								</Grid>
							</Form>
						</Formik>
					</StyledGridItem>
				</StyledGrid>
			</StyledContainer>
		</StyledContactForm>
	)
}

export default ContactForm
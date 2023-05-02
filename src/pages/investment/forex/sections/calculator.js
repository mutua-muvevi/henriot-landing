import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	Grid,
	IconButton,
	Stack,
	Tooltip,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import { FaDollarSign, FaEuroSign, FaQuestion } from "react-icons/fa";

import RadioWrapper from "../../../../components/formui/radio/radio";
import TextFieldWrapper from "../../../../components/formui/textfield/textfield";

import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Wrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	background: theme.palette.gradient.primaryLight,
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({}));

const StyledGridItemLeft = styled(Grid)(({ theme }) => ({}));

const StyledGridItemRight = styled(Grid)(({ theme }) => ({}));

const StyledCard = styled(Card)(({ theme }) => ({}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	padding: "30px"
}));

const initialValues = {
	currency: "usd",
	startingCapital: "",
	months: "",
};

const validationSchema = Yup.object().shape({
	currency: Yup.string().required("Required"),
	startingCapital: Yup.number().required("Required"),
	months: Yup.number().required("Required"),
});

const averageProfitPerMonth = 0.14
const averageProfitShare = 0.4


const calculateValues = (startingCapital, months, currency) => {
	const capital = parseFloat(startingCapital);
	const mon = parseFloat(months);

	const expectedAccountEquity = capital * (1 +  averageProfitPerMonth)**mon;
	const profitRental = expectedAccountEquity - capital;
	const profitManaged = profitRental * (1-averageProfitShare);
	const profitShareFees = profitRental - profitManaged;
  
	return [
		{
			key: "Expected Account Equity",
			value: `${currency === "usd" ? "$" : "€"}${expectedAccountEquity}`,
		},
		{
			key: "Profit (Rental)",
			value: `${currency === "usd" ? "$" : "€"}${profitRental}`,
		},
		{
			key: "Profit (Managed)",
			value: `${currency === "usd" ? "$" : "€"}${profitManaged}`,
		},
		{
			key: "Profit Share Fees",
			value: `${currency === "usd" ? "$" : "€"}${profitShareFees}`,
		},
	];
};

const ForexCalculator = ({ calculator }) => {
	const [calculatedValues, setCalculatedValues] = useState([
		{
			key: "Expected Account Equity",
			value: 0
		},
		{
			key: "Profit (Rental)",
			value: 0
		},
		{
			key: "Profit (Managed)",
			value: 0
		},
		{
			key: "Profit Share Fees",
			value: 0
		},
	]);

	const radioOptions = [
		{ label: "USD", value: "usd" },
	];

	const submitHandler = (values) => {
		console.log("Form data", values);
    	setCalculatedValues(calculateValues(values.startingCapital, values.months, values.currency));
	};

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: validationSchema,
		onSubmit: submitHandler,
	});

	

	return (
		<Wrapper>
			<Container maxWidth="lg">
				<StyledGridContainer container spacing={3}>
					<StyledGridItemLeft item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Stack direction="column" spacing={1.5}>
							<Typography variant="h2" color="text.primary">
								{calculator.left.title}
							</Typography>

							{calculator.left.items.map((el, i) => (
								<Stack
									direction="row"
									justifyContent="space-between"
								>
									<Stack
										direction="row"
										spacing={1.5}
										alignItems="center"
									>
										<Typography
											variant="h5"
											color="text.primary"
										>
											{el.key}
										</Typography>
										<Tooltip
											title={el.tooltip}
											arrow
											placement="top"
											variant="solid"
										>
											<IconButton>
												<FaQuestion
													style={{
														fontSize: "inherit",
													}}
												/>
											</IconButton>
										</Tooltip>
									</Stack>
								</Stack>
							))}
						</Stack>
					</StyledGridItemLeft>

					<StyledGridItemRight item xs={12} sm={12} md={12} lg={6} xl={6}>
						<StyledCard>
							<StyledCardContent>
								<Stack direction="column" spacing={3}>
									<Formik
										initialValues={initialValues}
										validationSchema={validationSchema}
										onSubmit={submitHandler}
									>
										{({values}) => (
											<Form>
												<Stack rirection="column" spacing={3}>
													<Typography variant="h4" component="h2" >
														Expect Profit Calcuator
													</Typography>

													<RadioWrapper
														name="currency"
														label="Currency"
														options={radioOptions}
														row
													/>

													<Stack direction="row" justifyContent="space-between" spacing={3}>
														<TextFieldWrapper
															name="startingCapital"
															placeholder="5000"
															label="Starting capital"
															startIcon={values.currency === "euro" ? <FaEuroSign /> : <FaDollarSign />}
														/>
														
														<TextFieldWrapper
															name="months"
															placeholder="Months"
															label="Months"
														/>
													</Stack>

													<Stack direction="row" justifyContent="space-between">
														<Typography variant="h6">
															Expected Monthly Returns
														</Typography>

														<Typography variant="h6" color="primary">
															14%
														</Typography>
													</Stack>

													<Stack direction="row" justifyContent="space-between">
														<Typography variant="h6">
															Average Profit Share Fee
														</Typography>

														<Typography variant="h6" color="primary">
															40%
														</Typography>
													</Stack>

													<Button
														variant="contained"
														color="primary"
														type="submit"
													>
														Calculate
													</Button>
												</Stack>
											</Form>

										)}
									</Formik>
									
									<Stack direction="column" spacing={1.5}>
										{calculatedValues.map((item, index) => (
											<Stack direction="row" justifyContent="space-between" alignItems="center">
												<Typography key={index} variant="h5" gutterBottom={index !== calculatedValues.length - 1}>
													{item.key}
												</Typography>
												<Typography key={index} variant="h6" color="text.secondary" gutterBottom={index !== calculatedValues.length - 1}>
													{item.value}
												</Typography>

											</Stack>
										))}
									</Stack>

								</Stack>
							</StyledCardContent>
						</StyledCard>
					</StyledGridItemRight>
				</StyledGridContainer>
			</Container>
		</Wrapper>
	);
};

export default ForexCalculator;

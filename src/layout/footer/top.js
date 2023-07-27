import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, Container, Grid, Stack, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { footerItems, footerSocialMedia } from './info';
import { MdExpandMore } from 'react-icons/md';

import RadioWrapper from "../../components/formui/radio/radio";
import TextFieldWrapper from "../../components/formui/textfield/textfield";

import { Formik, Form, useFormik } from "formik";
import * as Yup from "yup";
import CheckboxField from '../../components/formui/checkbox/checkbox';
import { FaPaperPlane } from 'react-icons/fa';
import { postEmail } from '../../redux/action/email';
import { connect } from 'react-redux';

const logo = "https://res.cloudinary.com/dqweh6zte/image/upload/v1658133237/henriot/logo/henriot_logo_mefxsi.png";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis pulvinar tellus, in ultricies sapien pharetra vitae."

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItemLogo = styled(Grid)(({ theme }) => ({

}));

const styledLogo = {
	maxWidth:"300px"
}

const StyledSocialMediaContainer = styled(Card)(({ theme }) => ({
	width: "30px",
	height: "30px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
}))

const StyledGridItemContent = styled(Grid)(({ theme }) => ({

}));

const styledLink = {
	color: "inherit",
	textDecoration: "none",
	cursor: "pointer"
}

const StyledAccordion = styled(Accordion)(({theme}) => ({
	border: 'none',
	'&:before': {
	display: 'none',
	},
	'& .MuiAccordionSummary-root': {
		minHeight: 'unset',
	},
	'& .MuiAccordionDetails-root': {
		padding: 0,
	},
	backgroundColor: "inherit"
}))

const FooterTop = ({ saveEmail }) => {
	
	const initialValues = {
		email: "",
		readTerms: false,
	};

	const validationSchema = Yup.object().shape({
		email: Yup.string().email("Add a valid email").required("Email is required"),
		readTerms: Yup.boolean(),
	});

	const submitHandler = (values, { resetForm }) => {
		saveEmail(values)
		resetForm()
	}

  return (
	<StyledWrapper>
		<Container maxWidth="lg">
			<StyledGrid container spacing={3}>
				<StyledGridItemLogo item xs={12} sm={12} md={12} lg={4} xl={4}>
					<Stack direction="column" textAlign="left" spacing={3}>
						
						<img src={logo} alt="Henriot Logo" style={styledLogo}/>
						
						<Typography variant="body1">
							client@henriotgroup.com<br/>
							Vistra Corporate Services Centre,
							Suite 23, 1st Floor, Eden Plaza, Eden Island,
							Mahe, Republic of Seychelles
						</Typography>
						
						<Stack direction="row" spacing={3}>
							{
								footerSocialMedia.map((el, i) => (
									<a href={el.link} style={styledLink} target="_blank" rel="noreferrer" key={i}>
										<StyledSocialMediaContainer>
											{el.icon}
										</StyledSocialMediaContainer>
									</a>
								))
							}
						</Stack>
					</Stack>
				</StyledGridItemLogo>

				<StyledGridItemContent item xs={12} sm={12} md={12} lg={4} xl={4}>
					{footerItems.map((footerItem, index) => (
						<StyledAccordion
							key={index}
							elevation={0}
						>
						<AccordionSummary
							expandIcon={<MdExpandMore />}
							aria-controls={`panel${index + 1}-content`}
							id={`panel${index + 1}-header`}
						>
							<Typography variant="subtitle2" color="text.primary">
								{footerItem.title}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Stack direction="column" sx={{ml:"20px"}}>
								{footerItem.items.map((item, i) => (
										<Link to={item.path} style={styledLink} key={i}>
											<Typography variant="body1" color="text.primary">
												{item.label}
											</Typography>
										</Link>
								))}
							</Stack>
						</AccordionDetails>
						</StyledAccordion>
					))}
				</StyledGridItemContent>

				<StyledGridItemContent item xs={12} sm={12} md={12} lg={4} xl={4}>
					<Stack direction="column" spacing={1.5}>
						<Typography variant="subtitle1">
							Subscribe
						</Typography>

						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={submitHandler}
						>
							{({values}) => (
								<Form>
									<Stack direction="column" spacing={1.5}>
										<TextFieldWrapper
											name="email"
											placeholder="Email"
											label="Email"
											type="email"
										/>
										<CheckboxField
											name="readTerms"
											label="I have read the terms and conditions"
										/>
										<Button color="primary" variant="contained" endIcon={<FaPaperPlane/>} type="submit">
											Subscribe
										</Button>
									</Stack>
								</Form>
							)}
						</Formik>
					</Stack>
				</StyledGridItemContent>
			</StyledGrid>
		</Container>
	</StyledWrapper>
)
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = (dispatch) => ({
	saveEmail: (values) => dispatch(postEmail(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterTop)
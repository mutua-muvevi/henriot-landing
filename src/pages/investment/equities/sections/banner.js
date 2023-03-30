import { useState } from "react";

import { Grid, Stack,  Button,  Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

import { FaLongArrowAltRight } from "react-icons/fa";

import {  options } from '../info';
import ReusableBreadcrumbs from '../../../../components/breadcrumbs';
import ReusableTextDropDown from "../../../../components/textDropDown";
import { connect } from "react-redux";


const StyledBanner = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.neutral,
	minHeight: "60vh",
	paddingLeft:"5%",
	[theme.breakpoints.up("md")]: {
		paddingLeft: theme.spacing(2),
	},
	[theme.breakpoints.up("lg")]: {
		paddingLeft: theme.spacing(4),
	},
	[theme.breakpoints.up('xl')]: {
		paddingLeft: theme.spacing(30),
	},
}))

const StyledAbsoluteWrapper = styled(Box)(({ theme }) => ({
	position: "absolute",
	width: "100%",
	left: 0,
	top: "12vw"
}));

const StyledContentStack = styled(Stack)(({ theme }) => ({
	[theme.breakpoints.up("lg")]: {
		width: "70%"
	},
	[theme.breakpoints.down("md")]: {
		width: "100%"
	},
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}))

const StyledGridItemLeft = styled(Grid)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	height: "60vh",
	[theme.breakpoints.up("sm")]: {
		paddingLeft: theme.spacing(3),
		paddingRight: theme.spacing(3),
	},
	[theme.breakpoints.down("sm")]: {
		minHeight:"30vh"
	},
	[theme.breakpoints.up("md")]: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
	},
	[theme.breakpoints.up("lg")]: {
		paddingLeft: theme.spacing(20),
		paddingRight: theme.spacing(3),
	},
}))

const StyledDropDownSection = styled(Box)(({ theme }) => ({
	
}))

const StyledGridItemRight = styled(Grid)(({ theme }) => ({
	width: "100%",
	[theme.breakpoints.down("md")]: {
		marginBottom: "50px",
	},
}))

const StyledButton = styled(Button)(({ theme }) => ({
	width: "max-content",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
}))

const EquitiesBanner = ({banner}) => {
	
	const StyledImageBox = styled(Grid)(({ theme }) => ({
		backgroundImage: `url(${banner.image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "60vh",
		[theme.breakpoints.down("lg")]: {
			width: "80%",
			marginBotton: "30px"
		},
		borderRadius: "5px"
	}))
	

	return (
		<StyledBanner>
			<StyledAbsoluteWrapper>
				<Container maxWidth="lg">
					<StyledContentStack spacing={6} direction="column">
						<Stack spacing={3} direction="column" sx={{mr: "30px"}}>
							<ReusableBreadcrumbs breadCrumbsItem={banner.breadcrumbsItem} />

							<StyledDropDownSection>
								<ReusableTextDropDown options={options} />
							</StyledDropDownSection>

							<Typography variant="h3" color="text.primary">
								{banner.title}
							</Typography>

							<Typography variant="h6" textAlign="justify" color="text.secondary" sx={{fontWeight: 500}}>
								{banner.paragraph}
							</Typography>

							<StyledButton variant="contained" color="primary" endIcon={<FaLongArrowAltRight/>}>
								Explore Strategy
							</StyledButton>
						</Stack>
					</StyledContentStack>
				</Container>
			</StyledAbsoluteWrapper>

			<StyledGrid container spacing={3}>
				<StyledGridItemLeft item xs={12} sm={12} md={12} lg={7} xl={8}>
				</StyledGridItemLeft>

				<StyledGridItemRight item xs={12} sm={12} md={12} lg={5} xl={4}>
					<StyledImageBox>

					</StyledImageBox>
				</StyledGridItemRight>
			</StyledGrid>
		</StyledBanner>
	)
}

const mapStateToProps = ({ investmentEquity }) => ({
	banner : investmentEquity.data.banner
})

export default connect(mapStateToProps)(EquitiesBanner)
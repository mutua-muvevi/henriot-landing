import { useState } from "react";

import { Grid, Stack,  Button,  Box, Typography } from '@mui/material';
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
		minHeight:"40vh"
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
		[theme.breakpoints.down("md")]: {
			height: "50vh",
		},
	}))
	

	return (
		<StyledBanner>
			<StyledGrid container spacing={3}>
				<StyledGridItemLeft item xs={12} sm={12} md={12} lg={7} xl={8}>
					<Stack spacing={6} direction="column">
						<Stack spacing={3} direction="column" sx={{mr: "30px"}}>
							<ReusableBreadcrumbs breadCrumbsItem={banner.breadcrumbsItem} />

							<StyledDropDownSection>
								<ReusableTextDropDown options={options} />
							</StyledDropDownSection>

							<Typography variant="h3" color="text.primary">
								{banner.title}
							</Typography>

							<Typography variant="subtitle2" textAlign="justify" color="text.secondary" >
								{banner.paragraph}
							</Typography>

							<StyledButton variant="contained" color="primary" endIcon={<FaLongArrowAltRight/>}>
								Explore Strategy
							</StyledButton>
						</Stack>
					</Stack>
				</StyledGridItemLeft>

				<StyledGridItemRight item xs={12} sm={12} md={6} lg={5} xl={4}>
					<StyledImageBox>

					</StyledImageBox>
				</StyledGridItemRight>
			</StyledGrid>
		</StyledBanner>
	)
}

const mapStateToProps = ({ investmentEquity }) => ({
	banner : investmentEquity.data.reduxValue.banner
})

export default connect(mapStateToProps)(EquitiesBanner)
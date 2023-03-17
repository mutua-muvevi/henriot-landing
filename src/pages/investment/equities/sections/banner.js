import { useState } from "react";

import { Container, Grid, Stack,  Button, Menu, MenuItem, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { FaLongArrowAltRight } from "react-icons/fa";

import { banner } from '../info';
import ReusableBreadcrumbs from '../../../../components/breadcrumbs';
import ReusableTextDropDown from "../../../../components/textDropDown";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675816765/henriot/yiorgos-ntrahas-mcAUHlGirVs-unsplash_zos69m.jpg"

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
		paddingRight: theme.spacing(6),
	},
}))

const StyledDropDownSection = styled(Box)(({ theme }) => ({
	
}))

const StyledGridItemRight = styled(Grid)(({ theme }) => ({

}))

const StyledImageBox = styled(Grid)(({ theme }) => ({
	backgroundImage: `url(${image})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	height: "60vh",
	[theme.breakpoints.down("md")]: {
		height: "50vh",
	},
}))

const StyledButton = styled(Button)(({ theme }) => ({
	width: "max-content",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
}))

const EquitiesBanner = () => {


	return (
		<StyledBanner>
			<StyledGrid container spacing={3}>
				<StyledGridItemLeft item xs={12} sm={12} md={12} lg={7} xl={8}>
					<Stack spacing={6} direction="column">
						<Stack spacing={3} direction="column" sx={{mr: "30px"}}>
							<ReusableBreadcrumbs breadCrumbsItem={banner.breadcrumbsItem} />

							<StyledDropDownSection>
								<ReusableTextDropDown options={banner.dropDown} />
							</StyledDropDownSection>

							<Typography variant="h3" color="text.primary">
								Fintech Innovation
							</Typography>

							<Typography variant="subtitle2" textAlign="justify" color="text.secondary" >
								Aims to provide exposure to fintech innovations including mobile payments, digital wallets, peer-to-peer lending, blockchain technology, and financial risk transformation. These innovations should revolutionize the financial industry, impacting every sector of the global economy.
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


export default EquitiesBanner
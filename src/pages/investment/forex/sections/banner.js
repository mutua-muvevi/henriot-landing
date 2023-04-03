import { useState } from "react";

import { Grid, Stack,  Button,  Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';

import { FaLongArrowAltRight } from "react-icons/fa";
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
	top: "15vw"
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
}));

const StyledGridItemRight = styled(Grid)(({ theme }) => ({
	width: "100%",
	[theme.breakpoints.down("md")]: {
		marginBottom: "50px",
	},
}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "max-content",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
}));

const ForexBanner = ({banner}) => {

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
	}));

	return (
		<StyledBanner>
			<StyledAbsoluteWrapper>
				<Container maxWidth="lg">
					<StyledContentStack spacing={6} direction="column">
						<Stack spacing={1.5} direction="column" sx={{mr: "30px"}}>

							<Typography variant="h2" color="text.primary">
								{banner.boldTitle}
							</Typography>

							<Typography variant="h3" color="text.primary" sx={{fontWeight: 500}}>
								{banner.title}
							</Typography>

							<Typography variant="subtitle1" textAlign="justify" color="text.secondary" sx={{fontWeight: 500}}>
								{banner.caption}
							</Typography>
						</Stack>

						<StyledButton type="button" onClick={banner.button.action} variant="contained" color="primary" endIcon={<FaLongArrowAltRight/>}>
							{banner.button.label}
						</StyledButton>

						<Typography variant="caption" textAlign="justify" color="text.secondary">
							{banner.captionTwo}
						</Typography>
					</StyledContentStack>
				</Container>
			</StyledAbsoluteWrapper>

			<StyledGrid container spacing={3}>
				<StyledGridItemLeft item xs={12} sm={12} md={12} lg={6.5} xl={7}>
				</StyledGridItemLeft>

				<StyledGridItemRight item xs={12} sm={12} md={12} lg={5.5} xl={5}>
					<StyledImageBox>

					</StyledImageBox>
				</StyledGridItemRight>
			</StyledGrid>
		</StyledBanner>
	)
}

export default ForexBanner
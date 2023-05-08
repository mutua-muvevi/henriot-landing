import { useState } from "react";

import { Grid, Stack,  Button,  Box, Typography, Container, Rating, IconButton } from '@mui/material';
import { styled } from '@mui/system';

import { FaLongArrowAltRight, FaPlay } from "react-icons/fa";
import { connect } from "react-redux";
import { useTheme } from "@emotion/react";

const fpaLogo = "https://res.cloudinary.com/dqweh6zte/image/upload/v1681211694/henriot/fpa-removebg-preview_ehpacx.png"
const fxBookLogo = "https://res.cloudinary.com/dqweh6zte/image/upload/v1681211492/henriot/myfxbook-300-removebg-preview_o5rwnf.png"

const StyledBanner = styled(Box)(({theme}) => ({
	backgroundColor: theme.palette.background.neutral,
	padding: 0,
	[theme.breakpoints.up("md")]: {
		paddingLeft: theme.spacing(2),
	},
	[theme.breakpoints.up("lg")]: {
		paddingLeft: theme.spacing(4),
		height: "60vh"
	},
	[theme.breakpoints.up('xl')]: {
		paddingLeft: theme.spacing(30),
		height: "60vh"
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
	[theme.breakpoints.up('lg')]: {
		paddingLeft: theme.spacing(30),
		height: "60vh",
	},
}))

const StyledGridItemLeft = styled(Grid)(({ theme }) => ({

}));

const StyledGridItemRight = styled(Grid)(({ theme }) => ({
	height: "60vh",
	width: "100%",
	[theme.breakpoints.down("md")]: {
		marginBottom: "50px",
	},
}));

const StyledVideo = styled("video")(({ theme }) => ({
	height: "inherit",
	objectFit: "cover",
	objectPosition: "center",
	[theme.breakpoints.down("sm")]: {
		height: "30vh",
	},
}));



const StyledButton = styled(Button)(({ theme }) => ({
	width: "max-content",
	paddingTop: "10px",
	paddingBottom: "10px",
	paddingLeft: "20px",
	paddingRight: "20px",
}));

const linkStyle = {
	textDecoration: "none",
	color: "inherit",
	cursor: "pointer"
}

const styledFPALogo = {
	height: "60px"
}

const styledFXLogoImage = {
	width: "100px"
}

const StyledRating = styled(Rating)(({ theme }) => ({
	'& .MuiRating-iconFilled': {
		color: theme.palette.text.secondary,
	},
	'& .MuiRating-iconHover': {
		color: '#ff3d47',
	},
}));

const ForexBanner = ({banner, data}) => {
	const theme = useTheme();



	return (
		<StyledBanner >
			<StyledAbsoluteWrapper>
				<Container maxWidth="lg">
					<StyledContentStack spacing={6} direction="column">
						<Stack direction="column" sx={{mr: "30px"}}>

							<Typography variant="h2" color="text.primary">
								{data.boldTitle}
							</Typography>

							<Typography variant="h3" color="text.secondary" style={{fontWeight: 500}}>
								{data.title}
							</Typography>

							<Typography variant="subtitle2" textAlign="justify" color="text.primary" sx={{fontWeight: 500}}>
								{data.caption}
							</Typography>
						</Stack>

						<Stack direction="row" spacing={3}>
							<StyledButton type="button" onClick={data.button.action} variant="contained" color="primary" endIcon={<FaLongArrowAltRight/>}>
								{data.button.label}
							</StyledButton>
						</Stack>

						<Stack direction="row" spacing={3}>
							<Stack direction="row" spacing={1.5}>
								<img src={fpaLogo} style={styledFPALogo} alt="FPA Logo"/>
								<Stack direction="column">
									<StyledRating 
										value={5}
										readOnly
										size="small"
									/>
									<Typography variant="subtitle2" color="text.primary" sx={{fontWeight: 700}}>
										Excellent
									</Typography>
									<Typography variant="subtitle2" color="text.primary" sx={{fontWeight: 600}}>
										Forex Peace Army
									</Typography>
								</Stack>
							</Stack>
							<Stack direction="column" spacing={0.5}>
								<Typography variant="subtitle2" textAlign="justify" color="text.secondary">
									{data.captionTwo}
								</Typography>
								<a href="https://www.myfxbook.com" target="_blank" rel="noreferrer" style={linkStyle}>
									<img src={fxBookLogo} alt="myfxbook logo" style={styledFXLogoImage}/>
								</a>
							</Stack>
						</Stack>
					</StyledContentStack>
				</Container>
			</StyledAbsoluteWrapper>

			<StyledGrid container spacing={3}>
				<StyledGridItemLeft item xs={12} sm={12} md={12} lg={6.5} xl={7}>
				</StyledGridItemLeft>

				<StyledGridItemRight item xs={12} sm={12} md={12} lg={5.5} xl={5} >
					<Stack direction="column" justifyContent="center" sx={{height: "100%",}}>
						<StyledVideo  src={data.video} width="100%" height="100%"  autoPlay muted loop controls={false}></StyledVideo>
					</Stack>
				</StyledGridItemRight>
			</StyledGrid>
		</StyledBanner>
	)
}


const mapStateToProps = ({investmentEquity}) => ({
	data: investmentEquity.data.banner
})

export default connect(mapStateToProps)(ForexBanner)
import { Link } from "react-router-dom";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaChevronRight } from "react-icons/fa";


const StyledExchangeBanner = styled(Box)(({ theme }) => ({
	
}));

const styledVideo = {
	position: "relative",
	top: 0,
	left: 0,
	height: "60vh",
	objectFit: "cover",
	width: "100%",
	backgroundColor:"blue"
}

const StyledContainer = styled(Container)(({ theme }) => ({
	position: "relative",
	color:"#fff",
	top: "-40vh",
	zIndex: 2,
}))

const StyledButton = styled(Button)(({ theme }) => ({
	borderColor: "#fff",
	color: "#fff"
}))

// const linkStyles = {
// 	textDecoration: "none",
// 	color: "inherit"
// }

const ExchangeBanner = ({bannerItems}) => {
	return (
		<StyledExchangeBanner>
			<video style={styledVideo} autoPlay loop controls="" muted>
				<source  src={bannerItems.videoLink} type="video/mp4"/>
				<Typography variant="h5">
					Your browser does not support HTML video.
				</Typography>
			</video>

			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3} alignItems="center">
					<Typography variant="h3" gutterBottom>
						{bannerItems.title}
					</Typography>
					<Typography variant="subtitle1">
						{bannerItems.subtitle}
					</Typography>
					
					<StyledButton variant="outlined" color="primary" endIcon={<FaChevronRight/>}>
						<Typography variant="h5">
							{bannerItems.button.label}
						</Typography>
					</StyledButton>
				</Stack>
			</StyledContainer>
		</StyledExchangeBanner>
	)
}

export default ExchangeBanner
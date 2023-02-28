import { Link } from "react-router-dom";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaChevronRight } from "react-icons/fa";

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1677246028/henriot/video_vvjwad.mp4"

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

const linkStyles = {
	textDecoration: "none",
	color: "inherit"
}

const ExchangeBanner = () => {
	return (
		<StyledExchangeBanner>
			<video style={styledVideo} autoPlay loop controls="" muted>
				<source  src={videoLink} type="video/mp4"/>
				<Typography variant="h5">
					Your browser does not support HTML video.
				</Typography>
			</video>

			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3} alignItems="center">
					<Typography variant="h3" gutterBottom>
						FOREIGN EXCHANGE FUND
					</Typography>
					<Typography variant="subtitle1">
						Don't miss out on the Global opportunity. Maximize your investments with Henriot's Thematic Portfolios.
					</Typography>
					
					<Button variant="text" endIcon={<FaChevronRight/>}>
						<Typography variant="h5">
							Buy
						</Typography>
					</Button>
				</Stack>
			</StyledContainer>
		</StyledExchangeBanner>
	)
}

export default ExchangeBanner
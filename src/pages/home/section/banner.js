import { Link } from "react-router-dom";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1676458610/henriot/video_amk9d6.mp4"

const StyledBanner = styled(Box)(({ theme }) => ({
	
}));

const styledVideo = {
	position: "relative",
	top: 0,
	left: 0,
	height: "70vh",
	objectFit: "cover",
	
	width: "100%",
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

const Banner = () => {
	return (
		<StyledBanner>
			<video style={styledVideo} autoPlay loop controls="" muted>
				<source  src={videoLink} type="video/mp4"/>
				<Typography variant="h5">
					Your browser does not support HTML video.
				</Typography>
			</video>

			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3} alignItems="flex-start">
					<Box>
						<Typography variant="h2" gutterBottom>
							Mathematics takes investment decisions here
						</Typography>
						<Typography variant="subtitle1">
							Rule-based investing – fast, quantitative, reliable and inexpensive.
						</Typography>
					</Box>
					
					<Link to="/investment-process" style={linkStyles}>
						<Button variant="contained">
							Find out more
						</Button>
					</Link>
				</Stack>
			</StyledContainer>
		</StyledBanner>
	)
}

export default Banner
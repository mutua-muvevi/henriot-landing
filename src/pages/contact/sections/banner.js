import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1675812053/henriot/pexels-tima-miroshnichenko-7580448_rujknu.mp4"

const StyledBanner = styled(Box)(({ theme }) => ({
	
}));

const styledVideo = {
	position: "relative",
	top: 0,
	left: 0,
	height: "40vh",
	objectFit: "cover",
	
	width: "100%",
}

const StyledContainer = styled(Container)(({ theme }) => ({
	position: "relative",
	color:"#fff",
	top: "-15vh",
	zIndex: 2,

}))

const ContactBanner = () => {
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
						<Typography variant="h1" gutterBottom>
							Contact us
						</Typography>
					</Box>
				</Stack>
			</StyledContainer>
		</StyledBanner>
	)
}

export default ContactBanner
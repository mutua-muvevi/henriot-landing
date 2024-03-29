import { Link } from "react-router-dom";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const videoLink =
	"https://res.cloudinary.com/dqweh6zte/video/upload/v1676458610/henriot/video_amk9d6.mp4";

const StyledBanner = styled(Box)(({ theme }) => ({}));

const styledVideo = {
	position: "relative",
	top: 0,
	left: 0,
	height: "70vh",
	objectFit: "cover",

	width: "100%",
};

const StyledContainer = styled(Container)(({ theme }) => ({
	backgroundColor: "rgba(0,0,0,0.5)",
	position: "relative",
	color: "#fff",
	top: "-40vh",
	zIndex: 2,
	paddingTop: "20px",
	paddingbottom: "20px",
}));

const linkStyles = {
	textDecoration: "none",
	color: "inherit",
};

const StyledButton = styled(Button)(({ theme }) => ({
	minWidth: "200px",
	padding: "10px",
}));

const Banner = () => {
	return (
		<StyledBanner>
			<video style={styledVideo} autoPlay loop controls="" muted>
				<source src={videoLink} type="video/mp4" />
				<Typography variant="h5">
					Your browser does not support HTML video.
				</Typography>
			</video>

			<StyledContainer maxWidth="lg">
				<Stack
					direction="column"
					spacing={3}
					alignItems="center"
					textAlign="center"
				>
					<Box>
						<Typography
							variant="h3"
							gutterBottom
							sx={{ textTransform: "uppercase" }}
						>
							Mathematics takes investment decisions here
						</Typography>
						<Typography variant="h3">
							Quant-based investing – Fast, Quantitative,
							Reliable, and Consistent.
						</Typography>
					</Box>

					<Link to="/landing/company/overview" style={linkStyles}>
						<StyledButton variant="contained">
							<Typography variant="h6">Find out more</Typography>
						</StyledButton>
					</Link>
				</Stack>
			</StyledContainer>
		</StyledBanner>
	);
};

export default Banner;

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const BackgroundText = ({title, link, image, text, height, buttonText }) => {
	
	const backgroundImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg"
	
	const StyledBackgroundText = styled(Box)(({ theme }) => ({
		backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.57)), url(${image})`,
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	}));
	
	
	const StyledContainer = styled(Container)(({ theme }) => ({
		minHeight: height,
		color: "#fff",
		display: "flex",
		flexDirection:"column",
		justifyContent: "center",
		textAlign: "center",
		alignItems: "center",
	}));

	return (
		<StyledBackgroundText>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
					<Stack direction="column" justifyContent="center" spacing={1.5}>
						<Typography variant="h2">	
							Investment Strategies
						</Typography>
						<Typography variant="subtitle1">
							{text}
						</Typography>
					</Stack>

					<Link to={link} style={styledLink}>
						<Button variant="contained" sx={{width:"250px"}}>
							{buttonText}
						</Button>
					</Link>
				</Stack>
			</StyledContainer>
		</StyledBackgroundText>
	)
}

export default BackgroundText
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const backgroundImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675814582/henriot/stocks_lf852q.jpg"
const text = "Henriot's thematic investment strategies span market capitalizations, sectors, and geographies to focus on publicly listed companies that we expect to be the leaders, enablers, and beneficiaries of disruptive innovation. HG’s strategies aim to deliver long-term growth with a low correlation to traditional investment strategies. "

const StyledStrategy = styled(Box)(({ theme }) => ({
	backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.57)), url(${backgroundImage})`,
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	color: "#fff",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	textAlign: "center",
	alignItems: "center",
}));

const Strategy = () => {
	return (
		<StyledStrategy>
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
					<Button variant="contained" sx={{width:"250px"}}>
						Check our strategy
					</Button>
				</Stack>
			</StyledContainer>
		</StyledStrategy>
	)
}

export default Strategy
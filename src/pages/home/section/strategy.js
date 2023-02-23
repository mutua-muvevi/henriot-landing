import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const text = "Algorithmic trading systems allows certain financial securities to be bought or sold using mathematical algorithms automatically. These systems are formed by analysing historical and current market data using technical analysis and statistical data processing methods."

const StyledStrategy = styled(Box)(({ theme }) => ({
	backgroundColor: "#000000",
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
						<Typography variant="h3">	
							ALGORITHMIC TRADING PORTFOLIO
						</Typography>
						<Typography variant="subtitle1">
							{text}
						</Typography>
					</Stack>
				</Stack>
			</StyledContainer>
		</StyledStrategy>
	)
}

export default Strategy
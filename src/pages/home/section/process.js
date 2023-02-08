import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ProcessDiagram from "./processdiagram";
//  reactflow styles
import 'reactflow/dist/style.css';

const StyledHomeInvestmentProcess = styled(Box)(({ theme }) => ({
	backgroundColor: "rgba(0,0,0)",
	marginBottom: "50px"
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "70vh",
	color: "#fff",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	textAlign: "center",
	alignItems: "center",
}));

const HomeInvestmentProcess = () => {
	return (
		<StyledHomeInvestmentProcess>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
					<Typography variant="h2">	
						Investment Strategies
					</Typography>

					<Box>
						<ProcessDiagram/>
					</Box>

					<Button variant="contained" color="primary">
						View more
					</Button>
				</Stack>
			</StyledContainer>
		</StyledHomeInvestmentProcess>
	)
}

export default HomeInvestmentProcess
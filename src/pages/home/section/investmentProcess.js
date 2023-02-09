import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

//  reactflow styles
import 'reactflow/dist/style.css';
import TopDownDagram from "../../../components/topDownDiagram";

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

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const HomeInvestmentProcess = () => {
	return (
		<StyledHomeInvestmentProcess>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
					<Typography variant="h2">	
						Investment Strategies
					</Typography>

					<Box>
						<TopDownDagram/>
					</Box>

					<Link to="/investment-process" style={styledLink}>
						<Button variant="contained" color="primary">
							View more
						</Button>
					</Link>
				</Stack>
			</StyledContainer>
		</StyledHomeInvestmentProcess>
	)
}

export default HomeInvestmentProcess
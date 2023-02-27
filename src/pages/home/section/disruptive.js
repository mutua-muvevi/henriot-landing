import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { contentAfterBanner } from "../info"

const StyledDisruptive = styled(Box)(({ theme }) => ({
	marginBottom: "100px",
	marginTop: "-8vh"
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

const Disruptive = () => {
	return (
		<StyledDisruptive>
			<StyledContainer maxWidth="lg">
				<Stack direction="column" spacing={3} textAlign="center">
					<Typography variant="h3">
						ABOUT THE FUND
					</Typography>
					{
						contentAfterBanner.map((el, i) => (
							<Typography variant="h4" color="text.primary" key={i}>
								{el}
							</Typography>
						))
					}
				</Stack>
			</StyledContainer>
		</StyledDisruptive>
	)
}

export default Disruptive
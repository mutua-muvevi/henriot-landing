import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { contentAfterBanner } from "../info"

const StyledDisruptive = styled(Box)(({ theme }) => ({
	marginBottom: "100px"
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

const Disruptive = () => {
	return (
		<StyledDisruptive>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" spacing={3} textAlign="center">
					<Typography variant="h3">
						ABOUT THE FUND
					</Typography>
					{
						contentAfterBanner.map((el, i) => (
							<Typography variant="subtitle1" color="text.primary" key={i}>
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
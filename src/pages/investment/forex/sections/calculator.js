import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const ForexCalculator = () => {
	return (
		<StyledWrapper>
			<Typography variant="h1">ForexCalculator</Typography>
		</StyledWrapper>
	)
}

export default ForexCalculator
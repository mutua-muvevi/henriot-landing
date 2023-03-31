import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Box)(({ theme }) => ({

}))

const ForexBanner = () => {
	return (
		<StyledWrapper>
			<Typography variant="h1">ForexBanner</Typography>
		</StyledWrapper>
	)
}

export default ForexBanner
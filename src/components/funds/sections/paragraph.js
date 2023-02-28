import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { featuresParagraph } from "../info";

const StyledFundsParagraph = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral,
}));

const StyledContainer = styled(Container)(({ theme }) => ({

}));

const StyledStack = styled(Stack)(({ theme }) => ({
	paddingTop: "30px",
	paddingBottom: "30px",
}));

const FundsParagraph = () => {
	return (
		<StyledFundsParagraph >
			<StyledContainer maxWidth="lg">
				<StyledStack spacing={3} direction="column">
					{
						featuresParagraph.map((el, i) => (
							<Typography variant="subtitle2" key={i}>
								{el}
							</Typography>
						))
					}
				</StyledStack>
			</StyledContainer>
		</StyledFundsParagraph>
	)
}

export default FundsParagraph
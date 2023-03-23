import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundsParagraph = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral,
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	paddingTop: "30px"
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	paddingTop: "30px",
	paddingBottom: "30px",
}));

const FundsParagraph = ({fundsParagraph}) => {
	return (
		<StyledFundsParagraph id="paragraph">
			<StyledContainer maxWidth="lg">
				<Typography
					variant="h3"
					color="text.primary" sx={{marginBottom: "20px",}}>
					Features
				</Typography>
				<StyledStack spacing={3} direction="column">
					{
						fundsParagraph.map((el, i) => (
							<Typography variant="subtitle2" key={i} textAlign="justify">
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
import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundInvestmentTerms = styled(Box)(({ theme }) => ({
	paddingTop: "30px",
	paddingBottom: "30px",
}))


const StyledContainer = styled(Container)(({ theme }) => ({
	marginTop: "30px",
	marginBottom: "30px",
}));


const FundInvestmentTerms = ({paragraph}) => {
	return (
		<StyledFundInvestmentTerms id="terms">

			<StyledContainer maxWidth="lg">
				<Typography variant="body2" color="text.primary" sx={{marginBottom: "30px",fontWeight: "900"}}>
					Disclaimer
				</Typography>
				
				{
					paragraph ? (
							<Stack spacing={3}>
								{
									paragraph.map((el, i) => (
										<Typography
											key={i}
											variant="caption"
											color="text.secondary"
											sx={{
												fontWeight: i === 0 ? "700" : "500",
												color: i === 0 ? "#000000" : "",
											}}
										>
											{el}
										</Typography>
									))
								}
							</Stack>
					) : ""
				}
			</StyledContainer>
		</StyledFundInvestmentTerms>
	)
}

export default FundInvestmentTerms
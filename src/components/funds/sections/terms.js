import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundInvestmentTerms = styled(Box)(({ theme }) => ({
	paddingBottom: "30px",
}))


const StyledContainer = styled(Container)(({ theme }) => ({
	marginBottom: "30px",
}));


const FundInvestmentTerms = ({paragraph}) => {
	return (
		<StyledFundInvestmentTerms id="terms">

			<StyledContainer maxWidth="lg">
				<Typography variant="body2" color="text.primary" sx={{marginBottom: "10px",fontWeight: "900"}}>
					Disclaimer
				</Typography>
				
				{
					paragraph ? (
							<Stack spacing={1}>
								{
									paragraph.map((el, i) => (
										<Typography
											key={i}
											variant="caption"
											color="text.secondary"
											textAlign="justify"
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
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { featuresItem } from "../info";

const StyledExchangeFeatures = styled(Box)(({ theme }) => ({
	
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "50vh",
	display: "flex",
	flexDirection:"column",
	justifyContent: "flex-start",
	alignItems: "center"
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	marginBottom: "30px"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	
}));

const ExchangeFeatures = () => {
	return (
		<StyledExchangeFeatures>
			<StyledContainer maxWidth="xl">
				<StyledStack direction="row" justifyContent="center" alignItems="center">
					<Typography variant="h2" color="text.primary">
						The features
					</Typography>

				</StyledStack>
				<StyledGrid container spacing={3}>
					{
						featuresItem.map((el, i) => (
							<StyledGridItem key={i} item xs={12} sm={6} md={4} lg={4} xl={3}>
								<Card>
									<CardContent>
										<Stack
											direction="column"
											justifyContent="center"
											alignItems="center"
											textAlign="center"
										>
											<Typography variant="h5">
												{el.title}
											</Typography>
											<Typography variant="subtitle">
												{el.text}
											</Typography>
										</Stack>
									</CardContent>
								</Card>
							</StyledGridItem>
						))
					}
				</StyledGrid>
			</StyledContainer>
		</StyledExchangeFeatures>
	)
}

export default ExchangeFeatures
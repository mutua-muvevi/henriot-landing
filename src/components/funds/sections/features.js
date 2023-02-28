import { Box, Button, Card, CardContent, Container, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsInfoCircle } from "react-icons/bs";

const StyledExchangeFeatures = styled(Box)(({ theme }) => ({
	marginTop: "-30vh",
	marginBottom: "20px",
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	
}));


const StyledCard = styled(Card)(({ theme }) => ({
	
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	minHeight: "30vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}));


const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	
}));

const StyledButton = styled(Button)(({ theme }) => ({
	
}));

const StyledRightCardsSection = styled(Box)(({ theme }) => ({
	
}));

const StyledRightCardsItem = styled(Box)(({ theme }) => ({
	border: "1px solid grey",
	borderRadius: "5px",
	padding: "10px"
}));

const StyledRightCardsItemTop = styled(Stack)(({ theme }) => ({

}));

const StyledRightCardsItemMain = styled(Stack)(({ theme }) => ({

}));



const ExchangeFeatures = ({featuresContent}) => {
	return (
		<StyledExchangeFeatures>
			<StyledContainer maxWidth="lg">
				<StyledCard variant="outlined">
					<StyledCardContent>
						<StyledGrid container>
							<StyledGridItem item xs={12} sm={12} md={5} lg={5} xl={5}>
								<Stack direction="column" spacing={1.5}>
									<Typography variant="h4" color="text.primary">
										{featuresContent.left.title}
									</Typography>
									<Typography variant="subtitle1" color="text.primary">
										{featuresContent.left.title}
									</Typography>
								</Stack>

								<StyledButton variant="contained">
									buy now
								</StyledButton>
							</StyledGridItem>

							<StyledGridItem item xs={12} sm={12} md={7} lg={7} xl={7}>
								<StyledRightCardsSection>
									<Grid container spacing={3}>
										{
											featuresContent.right.cards.map((el, i) => (
												<Grid item key={i} xs={6}>
													<StyledRightCardsItem >
														<StyledRightCardsItemTop
															direction="row"
															justifyContent="space-between"
															alignItems="center"
														>
															<Typography variant="subtitle2" color="text.primary">
																{el.text}
															</Typography>
															{
																el.info ? (
																	<Tooltip title="Something here" placement="top-start">
																		<BsInfoCircle/>
																	</Tooltip>
																) : ""
															}
														</StyledRightCardsItemTop>

														<StyledRightCardsItemMain
															direction="row"
															textAlign="left"
															spacing={3}
														>
															<Typography variant="h3" color="text.primary">
																{el.number}
															</Typography>
															{
																el.sideCaption ? (
																	<Typography variant="subtitle2">
																		{el.sideCaption}
																	</Typography>
																) : ""
															}
														</StyledRightCardsItemMain>
														{
															el.caption ? (
																<Typography variant="body1" color="text.primary">
																	{el.caption}
																</Typography>
															) : ""
														}
													</StyledRightCardsItem>
												</Grid>
											))
										}

									</Grid>
								</StyledRightCardsSection>
							</StyledGridItem>
						</StyledGrid>
					</StyledCardContent>
				</StyledCard>
			</StyledContainer>
		</StyledExchangeFeatures>
	)
}

export default ExchangeFeatures
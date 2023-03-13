import { Box, Button, Card, CardContent, Container, Fade , Grid, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsInfoCircle } from "react-icons/bs";

const StyledExchangeFeatures = styled(Box)(({ theme }) => ({
	marginTop: "-30vh",
	marginBottom: "50px",
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
	minHeight: "250px",
}));


const StyledLeftStack = styled(Stack)(({ theme }) => ({
	minHeight: "250px",

}));

const StyledButton = styled(Button)(({ theme }) => ({
	
}));

const StyledRightCardsSection = styled(Box)(({ theme }) => ({
	
}));

const StyledRightCardsItem = styled(Box)(({ theme }) => ({
	border: "1px solid grey",
	borderRadius: "5px",
	padding: "10px",
	height: "150px"
}));


const StyledRightCardsItemTop = styled(Stack)(({ theme }) => ({

}));

const StyledRightCardsItemMain = styled(Stack)(({ theme }) => ({

}));



const ExchangeFeatures = ({featuresContent}) => {
	return (
		<StyledExchangeFeatures id="features">
			<StyledContainer maxWidth="lg">
				<StyledCard variant="outlined">
					<StyledCardContent>
						<StyledGrid container>
							<StyledGridItem item xs={12} sm={12} md={4} lg={4} xl={4}>
								<StyledLeftStack direction="column" justifyContent="center" alignItems="center" spacing={1.5}>
									<Typography variant="h4" color="text.primary">
										{featuresContent.left.title}
									</Typography>
									<Typography variant="subtitle1" color="text.primary">
										{featuresContent.left.subtitle}
									</Typography>
									<StyledButton variant="contained">
										buy now
									</StyledButton>
								</StyledLeftStack>

							</StyledGridItem>

							<StyledGridItem item xs={12} sm={12} md={8} lg={8} xl={8}>
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
															<Box>
																{
																	el.info ? (
																		<Tooltip
																			title={el.info}
																			placement="bottom-start"
																			TransitionComponent={Fade}
																			TransitionProps={{ timeout: 900 }}
																			arrow
																		>
																			<IconButton>
																				<BsInfoCircle
																					style={{
																						fontSize: "15px"
																					}}
																				/>
																			</IconButton>
																		</Tooltip>
																	) : ""
																}
															</Box>

														</StyledRightCardsItemTop>

														<StyledRightCardsItemMain
															direction="row"
															textAlign="center"
															spacing={3}
														>
															<Typography variant="h2" color="text.primary">
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
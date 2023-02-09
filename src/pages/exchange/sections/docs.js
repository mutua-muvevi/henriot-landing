import { Box, Card, CardActionArea, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFileEarmarkPdfFill } from "react-icons/bs";

const StyledExchangeDocs = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "70vh",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	alignItems: "center",
	paddingTop: "30px",
	paddingBottom: "30px",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	marginBottom: "30px"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledIconSection = styled(Box)(({ theme }) => ({
	borderRadius: "50%"
}));

const styledIcon = {
	fontSize:"50px",
	color:"#f40f02"
}

const ExchangeDocs = () => {
	return (
		<StyledExchangeDocs>
			<StyledContainer maxWidth="xl">
				<StyledStack direction="row" justifyContent="center" alignItems="center">
					<Typography variant="h2" color="text.primary">
						The Documents
					</Typography>
				</StyledStack>

				<StyledGrid container spacing={3}>
					{
						[1,2,3,4,5,6,7,8].map((el, i) => (
							<StyledGridItem item xs={12} sm={12} md={6} lg={4} xl={3}>
								<Card>
									<CardActionArea>
										<CardContent>
											<Stack
												direction="row"
												alignItems="flex-start"
												spacing={1.5}
											>
												<StyledIconSection>
													<BsFileEarmarkPdfFill style={styledIcon}/>
												</StyledIconSection>

												<Stack direction="column">
													<Typography variant="subtitle1" color="text.primary">
														This is Documents title
													</Typography>
													<Typography variant="body2" color="text.secondary">
														This is a twenty word minimum description for the card  user interface (UI)
													</Typography>
												</Stack>
											</Stack>
										</CardContent>
									</CardActionArea>
								</Card>
							</StyledGridItem> 

						))
					}
				</StyledGrid>
			</StyledContainer>
		</StyledExchangeDocs>
	)
}

export default ExchangeDocs
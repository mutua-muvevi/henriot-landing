import { Box, Card, CardActionArea, CardContent, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { sentenceCase } from "change-case";
import { Link } from "react-router-dom";

import { researchCenter } from "../info";

const StyledHomeResearch = styled(Box)(({ theme }) => ({
	
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "70vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center"
}));

const linkStyle = {
	color:"inherit",
	textDecoration:"none"
}

const StyledGrid = styled(Grid)(({ theme }) => ({
	marginTop: "30px",
	marginBottom: "30px",
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({
	
}))

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({

}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}))

const styledImageMedia = {
	borderRadius: "10px"
}

const HomeResearch = () => {

	const viewCard = () => {
		console.log("Something happened")
	}

	return (
		<StyledHomeResearch>
			<StyledContainer maxWidth="xl">
				<Typography variant="h2" color="text.primary" gutterBottom>
					Our Innovation Research Centre
				</Typography>

				<Link to="/news" style={linkStyle}>
					<Typography variant="subtitle1" color="primary">
						Visit Henriot Research Centre
					</Typography>
				</Link>

				<StyledGrid container spacing={3}>
					{
						researchCenter.map((el, i) => (
							<StyledGridItem item key={i} xs={12} sm={12} md={6} lg={4} xl={4}>
								<StyledCard>
									<StyledCardActionArea onClick={viewCard}>
										<StyledCardContent>
											<Stack
												direction="column"
												spacing={3}
											>
												<img
													src={el.image}
													alt={el.title}
													style={styledImageMedia}
												/>

												<Stack direction="column" spacing={1.5}>
													<Typography variant="body2" color="primary">
														{sentenceCase(el.category)}
													</Typography>
													<Typography variant="subtitle1" color="text.primary">
														{sentenceCase(el.title)}
													</Typography>
												</Stack>

												<Stack
													direction="row"
													spacing={1.5}
													justifyContent="flex-start"
												>
													{
														el.tags.map((tag, i) => (
															<Box key={i}>
																<Chip
																	variant="outlined"
																	size="small"
																	label={tag}
																	sx={{borderRadius: "5px"}}
																/>
															</Box>
														))
													}
												</Stack>
											</Stack>
										</StyledCardContent>
									</StyledCardActionArea>
								</StyledCard>
							</StyledGridItem>	
						))
					}
				</StyledGrid>
			</StyledContainer>
		</StyledHomeResearch>
	)
}

export default HomeResearch
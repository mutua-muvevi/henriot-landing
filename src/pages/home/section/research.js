import { Link } from "react-router-dom";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaSearch } from "react-icons/fa";

import VerticalTabs from "../../../components/verticaltabs";
import MarketUpdateTab from "./tabs/marketupdate";
import BlogTab from "./tabs/blog";
import TradingViewsTab from "./tabs/tradingviews";
import MarketOutLookTab from "./tabs/marketoutlook";



const StyledHomeResearch = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral
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

const StyledButton = styled(Button)(({ theme }) => ({
	width: "300px"
}))


const tabItems = [
	{
		label: "Blogs",
		pannel:<BlogTab/>
	},
	{
		label: "Weekly Market Update",
		pannel:<MarketUpdateTab/>
	},
	{
		label: "Trading views",
		pannel:<TradingViewsTab/>
	},
	{
		label: "Monthly Market Outlook",
		pannel:<MarketOutLookTab/>
	},
]


const HomeResearch = () => {

	return (
		<StyledHomeResearch>
			<StyledContainer maxWidth="xl">

				<Stack
					direction="row"
					justifyContent="space-between"
					sx={{width: "100%"}}

				>
					<Typography variant="h3" color="text.primary" gutterBottom sx={{textTransform: "uppercase"}}>
						Investment Research
					</Typography>

					<StyledButton variant="outlined" endIcon={<FaSearch/>}>
						Visit Henriot Research Centre
					</StyledButton>
				</Stack>

				<Box sx={{width: "100%", marginTop: "50px"}}>
					<VerticalTabs
						tabItems={tabItems}
					/>
				</Box>

				{/* <Link to="/news" style={linkStyle}>
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
				</StyledGrid> */}
			</StyledContainer>
		</StyledHomeResearch>
	)
}

export default HomeResearch
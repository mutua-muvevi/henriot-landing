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
		pannel:<BlogTab/>
	},
	{
		label: "Trading views",
		pannel:<BlogTab/>
	},
	{
		label: "Monthly Market Outlook",
		pannel:<BlogTab/>
	},
]


const HomeResearch = () => {

	return (
		<StyledHomeResearch>
			<StyledContainer maxWidth="lg">

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
			</StyledContainer>
		</StyledHomeResearch>
	)
}

export default HomeResearch
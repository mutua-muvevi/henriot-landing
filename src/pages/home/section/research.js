import { Link } from "react-router-dom";

import {
	Box,
	Button,
	Container,
	Pagination,
	Stack,
	Typography,
} from "@mui/material";
import { styled } from "@mui/system";

import { FaSearch } from "react-icons/fa";

import VerticalTabs from "../../../components/verticaltabs";
import MarketUpdateTab from "./tabs/marketupdate";
import BlogTab from "./tabs/blog";
import TradingViewsTab from "./tabs/tradingviews";
import MarketOutLookTab from "./tabs/marketoutlook";

const StyledHomeResearch = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.common.black,
	color: "#ffffff"
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "70vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}));

const linkStyle = {
	color: "inherit",
	textDecoration: "none",
};

const StyledButton = styled(Button)(({ theme }) => ({
	width: "300px",
}));

const tabItems = [
	{
		label: "Blogs",
		pannel: <BlogTab />,
	},
	{
		label: "Weekly Market Update",
		pannel: <BlogTab />,
	},
	{
		label: "Trading views",
		pannel: <BlogTab />,
	},
	{
		label: "Quartely Market Outlook",
		pannel: <BlogTab />,
	},
];

const HomeResearch = () => {
	return (
		<StyledHomeResearch>
			<StyledContainer maxWidth="lg">
				<Stack
					direction="row"
					justifyContent="space-between"
					sx={{ width: "100%" }}
				>
					<Typography
						variant="h3"
						gutterBottom
						sx={{ textTransform: "uppercase" }}
					>
						HG Research Centre
					</Typography>

					<Link to="/landing/resources/research" style={linkStyle}>
						<StyledButton variant="outlined" endIcon={<FaSearch />}>
							Visit Henriot Research Centre
						</StyledButton>
					</Link>
				</Stack>

				<Box sx={{ width: "100%", marginTop: "50px" }}>
					<VerticalTabs tabItems={tabItems} />
					<Stack
						direction="row"
						justifyContent="center"
						alignItems="center"
					>
						<Pagination
							count={3}
							size="small"
							color="primary"
							sx={{
								"& .MuiPaginationItem-root": {
									color: "#ffffff",
								},
								"& .Mui-selected": {
									backgroundColor: "#ffffff",
									color: "#000000",
								},
							}}
						/>
					</Stack>
				</Box>
			</StyledContainer>
		</StyledHomeResearch>
	);
};

export default HomeResearch;

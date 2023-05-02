import { Alert, Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import PricingCard from "./pricingcard";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}));

const StyledTopSection = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral,
	padding: "20px",
	marginTop: "50px"
}));

const ForexPricing = () => {
	const pricingItems = [
		{
			top: {
				title: "Lifetime",
				number: "€999",
				subtitle: "One-time Payment",
				description:
					"A personal copy of the EA with complete access to all settings.",
			},
			button: {
				label: "Order Now",
				action: () => console.log("Action here..."),
			},
			duration: "lifetime",
			profitShare: null,
			support: true,
			telegramChannel: "in development",
		},
		{
			top: {
				title: "Rental Sponsored",
				number: "€699",
				subtitle: "Recurring Yearly",
				description: "Quick onboading and no capital limits.",
			},
			button: {
				label: "Order Now",
				action: () => console.log("Action here..."),
			},
			duration: "12 months",
			profitShare: null,
			support: true,
			telegramChannel: "via PAMM Panel",
		},
		{
			top: {
				title: "Profit Share",
				number: "€0",
				subtitle: "€0 Upfront Fees",
				description: "Requires a supported broker account.",
			},
			button: {
				label: "Start",
				action: () => console.log("Action here..."),
			},
			duration: "ongoing",
			profitShare: "25-35% *",
			support: true,
			telegramChannel: "via PAMM Panel",
		},
	];
	const columns = [
		{ field: "id", headerName: "ID", width: 90, hide: true },
		{ field: "property", headerName: "", flex: 1 },
		{ field: "pricingOne", headerName: "Lifetime", flex: 1 },
		{ field: "pricingTwo", headerName: "Rental Sponsored", flex: 1 },
		{ field: "pricingThree", headerName: "Profit Share", flex: 1 },
	  ];
	  
	  const rows = [
		{
		  id: 1,
		  property: "Duration",
		  pricingOne: pricingItems[0].duration,
		  pricingTwo: pricingItems[1].duration,
		  pricingThree: pricingItems[2].duration,
		},
		{
		  id: 2,
		  property: "Profit Share",
		  pricingOne: pricingItems[0].profitShare || "-",
		  pricingTwo: pricingItems[1].profitShare || "-",
		  pricingThree: pricingItems[2].profitShare || "-",
		},
		{
		  id: 3,
		  property: "Support",
		  pricingOne: pricingItems[0].support ? "Yes" : "No",
		  pricingTwo: pricingItems[1].support ? "Yes" : "No",
		  pricingThree: pricingItems[2].support ? "Yes" : "No",
		},
		{
		  id: 4,
		  property: "Telegram Channel",
		  pricingOne: pricingItems[0].telegramChannel,
		  pricingTwo: pricingItems[1].telegramChannel,
		  pricingThree: pricingItems[2].telegramChannel,
		},
	  ];
	  

	return (
		<StyledWrapper>
			<Container maxWidth="lg">
				<Typography variant="h3" color="text.primary">
					Pricing
				</Typography>
				<StyledTopSection>
					<Stack direction="row">
						<Stack
							direction="column"
							flex={1}
							spacing={1.5}
						></Stack>
						{pricingItems.map((item, index) => (
							<PricingCard key={index} item={item} />
						))}
					</Stack>
				</StyledTopSection>
				<Box sx={{height: "250px"}}>
					<DataGrid
							rows={rows}
							columns={columns.map((column) => ({
								...column,
								renderCell: (params) => (
									<Typography variant="subtitle2">{params.value}</Typography>
								),
							}))}
							disableSelectionOnClick
							autoHeight
							hideFooterPagination
							hideFooter
							headerHeight={0}
						/>
				</Box>
				<Alert severity="info">
					<Typography variant="subtitle1">
						* Sponsored version requires supported broker account
					</Typography>
				</Alert>
			</Container>
		</StyledWrapper>
	);
};

export default ForexPricing;

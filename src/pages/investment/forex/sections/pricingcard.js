import { Box, Button, Stack, Typography } from "@mui/material";

const PricingCard = ({ item }) => {
	return (
		<Stack direction="column" flex={1} spacing={1.5}>
			<Typography variant="h4" color="text.primary">
				{item.top.title}
			</Typography>
			<Typography variant="h3" color="text.primary">
				{item.top.number}
			</Typography>
			<Typography variant="h5" color="text.primary">
				{item.top.subtitle}
			</Typography>
			<Typography variant="subtitle1" color="text.secondary">
				{item.top.description}
			</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => item.button.action()}
			>
				{item.button.label}
			</Button>
		</Stack>
	);
};

export default PricingCard;

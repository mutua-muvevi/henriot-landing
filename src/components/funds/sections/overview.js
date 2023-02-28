import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { overviewItems } from "../info";

const StyledFundsOverview = styled(Container)(({ theme }) => ({
	minHeight: "20vh",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const FundsOverview = () => {
	return (
		<StyledFundsOverview maxWidth="lg">
			<StyledGrid container spacing={5}>
				{
					overviewItems.map((el, i) => (
						<StyledGridItem item key={i} xs={12} sm={12} md={6} lg={6} xl={6}>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography variant="subtitle2" color="text.primary">
									{el.title}
								</Typography>
								<Typography variant="subtitle2" color="text.secondary">
									{el.text}
								</Typography>
							</Stack>
						</StyledGridItem>
					))
				}
			</StyledGrid>
		</StyledFundsOverview>
	)
}

export default FundsOverview
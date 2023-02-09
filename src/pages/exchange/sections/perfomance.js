import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { perfomanceParagraph } from "../info";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675896500/henriot/pexels-alesia-kozik-6770610_yigl7h.jpg"

const StyledExchangePerfomance = styled(Box)(({ theme }) => ({
	
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "70vh",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	alignItems: "center"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}))

const StyledGridItem = styled(Grid)(({ theme }) => ({

}))

const styledImage = {

}

const ExchangePerfomance = () => {
	return (
		<StyledExchangePerfomance>
			<StyledContainer maxWidth="xl">
				<StyledGrid container spacing={3}>
					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<img
							src={image}
							alt="Perfomance"
							style={styledImage}
						/>
					</StyledGridItem>
					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Stack direction="column" spacing={3}>
							{
								perfomanceParagraph.map((el, i) => (
									<Typography variant="body1" key={i}>
										{el}
									</Typography>
								))
							}
						</Stack>
					</StyledGridItem>
				</StyledGrid>
			</StyledContainer>
		</StyledExchangePerfomance>
	)
}

export default ExchangePerfomance
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675813132/henriot/accounting-gb1c4e3081_1920_rbsf7a.png"

const StyledDisruptive = styled(Box)(({ theme }) => ({
	
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridLeft = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridRight = styled(Grid)(({ theme }) => ({

}));

const imageStyle = {
	width: "70%"
}

const Disruptive = () => {
	return (
		<StyledDisruptive>
			<StyledContainer maxWidth="xl">
				<StyledGrid container spacing={3}>
					<StyledGridLeft xs={12} sm={12} md={12} lg={6} xl={6}>
						<Stack direction="column" spacing={3} justifyContent="center">
							<Stack direction="column" spacing={1.5}>
								<Typography variant="h2">
									We Invest Solely in Disruptive  Innovations
								</Typography>
								<Typography variant="subtitle1">
									For investors seeking long-term growth in the public markets.
								</Typography>
							</Stack>

							<Button variant="contained">
								Stay Innovative
							</Button>
						</Stack>
					</StyledGridLeft>
					<StyledGridRight item xs={12} sm={12} md={12} lg={6} xl={6}>
						<img
							src={image}
							alt=" Invest Solely in Disruptive  Innovations"
							style={imageStyle}
						/>
					</StyledGridRight>
				</StyledGrid>
			</StyledContainer>
			<div>Disruptive</div>
		</StyledDisruptive>
	)
}

export default Disruptive
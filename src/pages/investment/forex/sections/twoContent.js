import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom : "50px",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledButton = styled(Button)(({ theme }) => ({
	minWidth: "250px"
}))


const ForexTwoContent = ({twoContent}) => {
	return (
		<StyledWrapper>
			<Container maxWidth="xl">
				<StyledGrid container spacing={3}>
					{
						twoContent.map((el, i) => (
							<StyledGridItem item key={i} xs={12} sm={12} md={6} lg={6} xl={6}>
								<Stack direction="column" spacing={3}>
									<Stack direction="row" spacing={3}>
										<Typography variant="h5" color="text.primary">
											{el.title}
										</Typography>
										{el.icon}
									</Stack>
									<Typography  variant="h6" color="text.primary" sx={{fontWeight: 500}}>
										{el.text}
									</Typography>

									<StyledButton type="button" variant="contained" color="primary">
										{el.button.label}
									</StyledButton>
								</Stack>
								<div>
									<Grid container spacing={3}>
										<Grid item >
										</Grid>

										<Grid item >
											
										</Grid>
									</Grid>
								</div>
							</StyledGridItem>
						))
					}
				</StyledGrid>
			</Container>
		</StyledWrapper>
	)
}

export default ForexTwoContent
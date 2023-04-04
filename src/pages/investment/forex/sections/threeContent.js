import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom : "50px",
	backgroundColor: theme.palette.background.neutral
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const imageStyle = {
	width: "200px",
	height: "200px"
};


const StyledIconBox = styled(Box)(({ theme }) => ({
	color: theme.palette.primary.main,
	backgroundColor: theme.palette.primary.quaterOpacity,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "50px",
	height: "50px",
	borderRadius: "50%"
}));

const ForexThreeContent = ({threeContent}) => {
	return (
		<StyledWrapper>
			<Container maxWidth="lg">
				<StyledGrid container spacing={3}>
					{
						threeContent.map((el, i) => (
							<StyledGridItem item key={i} xs={12} sm={12} md={12} lg={4} xl={4}>
								<Stack direction="column" spacing={3}>
									<StyledIconBox>
										{el.icon}
									</StyledIconBox>

									<Typography variant="h5" color="text.primary">
										{el.title}
									</Typography>

									<Typography variant="h6" color="text.primary" sx={{fontWeight: 500}}>
										{el.text}
									</Typography>
								</Stack>
							</StyledGridItem> 
						))
					}
				</StyledGrid>
			</Container>
		</StyledWrapper>
	)
}

export default ForexThreeContent
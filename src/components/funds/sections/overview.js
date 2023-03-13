import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledFundsOverview = styled(Container)(({ theme }) => ({
	minHeight: "20vh",
	paddingBottom: "70px"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledContentStack = styled(Stack)(({ theme }) => ({

}));

const StyledContentRightStack = styled(Stack)(({ theme }) => ({

}));

const FundsOverview = ({overviewItems, paragraph}) => {
	
	return (
		<StyledFundsOverview maxWidth="lg" id="overview">
			<Typography variant="h3" color="text.primary" sx={{marginBottom: "20px"}}>
				Overview
			</Typography>
			<StyledGrid container spacing={3}>
				{
					paragraph ? (
						<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
							<Stack spacing={3}>
								{
									paragraph.map((el, i) => (
										<StyledContentStack key={i} direction="column" >
											<Typography variant="h4" color="text.primary" gutterBottom>
												{el.title}
											</Typography>
											{
												el.paragraphs.map((p, index) => (
													<Typography key={index} variant="subtitle2" color="text.secondary" textAlign="justify">
														{p}
													</Typography>
												))
											}
										</StyledContentStack>
									))
								}
							</Stack>

						</StyledGridItem>

					) : ""
				}

				<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
					<Stack spacing={2} sx={{height: "200px"}}>
						{
							overviewItems.map((el, i) => (
								<StyledContentRightStack direction="row" justifyContent="left" alignItems="center" key={i} spacing={3}>
									<Typography variant="h5" color="text.primary">
										{el.title} : 
									</Typography>
									<Typography variant="h5" color="text.secondary" sx={{ml:"30px"}}>
										{el.text}
									</Typography>
								</StyledContentRightStack>
							))
						}
					</Stack>
				</StyledGridItem>
				
			</StyledGrid>
		</StyledFundsOverview>
	)
}

export default FundsOverview
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillCircleFill } from "react-icons/bs";
import { connect } from "react-redux";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom : "50px",
	backgroundColor: theme.palette.gradient.primary
}));

const StyledTopContainer = styled(Container)(({ theme }) => ({
	marginBottom :"50px"
}));

const StyledMainContainer = styled(Container)(({ theme }) => ({

}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledGraphBox = styled(Box)(({ theme }) => ({
	width: "150px",
	backgroundColor: theme.palette.primary.main,
	padding: "10px",
	borderRadius: "5px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "flex-end"
}))

const ForexWhatIs = ({whatIs}) => {
	return (
		<StyledWrapper>
			<Box>
				<StyledTopContainer maxWidth="lg">
					<Typography variant="h2" color="text.primary">
						{whatIs.title}
					</Typography>
					<Typography variant="h5" color="text.primary">
						{whatIs.subtitle}
					</Typography>
				</StyledTopContainer>

				<StyledMainContainer maxWidth="xl">
					<StyledGrid container spacing={3}>
						<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
							<Stack spacing={3} direction="row" alignItems="flex-end">
								{
									whatIs.graph.map((el, i) => (
										<div key={i}>
											<Typography variant="h5" color="primary"textAlign="center" style={{fontSize: "500"}}>
												{el.title}
											</Typography>
											<StyledGraphBox
												
												style={{
													height: el.height
												}}
											>
												<Typography variant="h5" sx={{color: "#fff"}} >
													{el.number}
												</Typography>
												<Typography variant="h5" sx={{color: "#fff"}} >
													Average
												</Typography>
											</StyledGraphBox>

										</div>
									))
								}
							</Stack>
						</StyledGridItem>

						<StyledGridItem item xs={12} sm={12} md={12} lg={8} xl={8}>
							<Stack direction="column" spacing={5}>
								<div>
									<Grid container spacing={3}>
										{
											whatIs.lists.map((el, i) => (
												<Grid key={i} item xs={12} sm={12} md={12} lg={6} xl={6}>
													<Stack direction="column" spacing={3}>
														<Typography variant="h5" color="text.primary">
															{el.title}
														</Typography>

														<div>
															<Grid container spacing={3}>
																<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
																	<List dense>
																		{
																			el.items.map((item, index) => (
																				<ListItem key={index} sx={{borderTop: "1px solid grey"}}>
																					<ListItemIcon>
																						<BsFillCircleFill />
																					</ListItemIcon>
																					<ListItemText primary={
																						<Typography variant="subtitle1" color="text.secondary" sx={{fontWeight: 500}} textAlign="justify">
																							{item}
																						</Typography>
																					} />
																				</ListItem>
																			))
																		}
																	</List>
																</Grid>
															</Grid>
														</div>

													</Stack>
												</Grid>
											))
										}
									</Grid>

									<div>
										<Grid container spacing={3} style={{marginTop:"50px"}}>
											<Stack direction="column" spacing={3}>
												<Typography variant="h5" color="text.primary">
													Present Record 
												</Typography>

												<Typography variant="h1">Widget here</Typography>
											</Stack>
										</Grid>
									</div>
								</div>
							</Stack>
						</StyledGridItem>

					</StyledGrid>

				</StyledMainContainer>
			</Box>
		</StyledWrapper>
	)
}

const mapStateToProps = ({investmentEquity}) => ({
	whatIs: investmentEquity.data.whatIs
})


export default connect(mapStateToProps)(ForexWhatIs)
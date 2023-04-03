import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { FaChevronRight } from "react-icons/fa"

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom : "50px",
	backgroundColor: theme.palette.background.neutral
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

const creatorImageStyles = {
	width: "100px",
	height: "100px"
}

const styledPresentRecord = {
	maxWidth: "400px",
	maxHeight: "500px",
	borderRadius: "5px"
}

const ForexWhatIs = ({whatIs}) => {
	return (
		<StyledWrapper>
			<Box>
				<StyledTopContainer maxWidth="lg">
					<Typography variant="h3" color="text.primary">
						{whatIs.title}
					</Typography>
					<Typography variant="subtitle1" color="text.primary">
						{whatIs.subtitle}
					</Typography>
				</StyledTopContainer>

				<StyledMainContainer maxWidth="xl">
					<StyledGrid container spacing={3}>
						<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
							<Typography variant="h5">
								Bar chart here
							</Typography>
						</StyledGridItem>
						{
							whatIs.lists.map((el, i) => (
								<StyledGridItem item key={i} xs={12} sm={12} md={12} lg={4} xl={4}>
									<Stack direction="column" spacing={1.5}>
										<Typography variant="h5" color="text.primary">
											{el.title}
										</Typography>

										<List dense>
											{
												el.items.map((item, index) => (
													<ListItem key={index}>
														<ListItemIcon>
															<FaChevronRight />
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
									</Stack>
								</StyledGridItem>
							))
						}
					</StyledGrid>
					
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>

						</Grid>

						<Grid  item xs={12} sm={12} md={12} lg={4} xl={4}>
							<Stack direction="column" spacing={3}>
								<Typography variant="h5" color="text.primary">
									Creators: 
								</Typography>

								{
									whatIs.creators.map((cr, i) => (
											<Stack key={i} direction="row" spacing={3}>
												<img src={cr.image} alt="Creators" style={creatorImageStyles}/>
												<Stack firection="column">
													<Typography variant="h6" color="text.primary">
														{cr.text}
													</Typography>
													<Typography variant="h6" color="text.secondary">
														{cr.role}
													</Typography>

												</Stack>
											</Stack>
									))
								}
							</Stack>
						</Grid>

						<Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
							<Stack direction="column" spacing={3}>
								<Typography variant="h5" color="text.primary">
									Present Record 
								</Typography>

								<img src={whatIs.presentRecord} alt="Henriots present record" style={styledPresentRecord}/>
							</Stack>

						</Grid>
					</Grid>

				</StyledMainContainer>
			</Box>
		</StyledWrapper>
	)
}

export default ForexWhatIs
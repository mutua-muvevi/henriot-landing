import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import ReusableBreadcrumbs from '../../../../components/breadcrumbs';

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
}));

const StyledContainer = styled(Container)(({ theme }) => ({

}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const styledImage = {
	width: "100px",
	height: "100px",
	borderRadius:"5px"
}

const StyledCard = styled(Card)(({theme}) => ({
	
}))

const StyledCardContent = styled(CardContent)(({theme}) => ({

}))


const ForexFeatures = ({features}) => {
	return (
		<StyledWrapper>
			<StyledContainer>
				<Stack direction="column" spacing={6}>
					<ReusableBreadcrumbs breadCrumbsItem={features.breadcrumbsItem} />

					<div>
						<StyledGrid container spacing={3}>
							{
								features.content.map((el, i) => (
									<StyledGridItem key={i} item xs={6} sm={6} md={4} lg={4} xl={4}>
										<div>
											<Stack direction="row" spacing={3}>
												<img src={el.image} alt={el.title} style={styledImage}/>
												<Stack direction="column" spacing={1.5}>
													<Typography variant="h6" color="text.primary">
														{el.title}
													</Typography>
													<Typography variant="subtitle2" color="text.primary" sx={{fontWeight: "500"}}>
														{el.text}
													</Typography>
												</Stack>
											</Stack>
										</div>
									</StyledGridItem>
								))
							}
						</StyledGrid>
					</div>

					<StyledCard>

							<StyledGrid container spacing={3} >
								{
									features.cardGroup.map((el, i) => (
										<StyledGridItem
											key={i}
											item
											xs={12} sm={12} md={6} lg={3} xl={3} sx={{ 
											borderBottom: { sm: '1px solid', md: 'none' },
											borderRight: { sm: 'none', md: '1px solid' },
											minHeight:"200px",
											...(i === features.cardGroup.length - 1 && { borderBottom: 'none' }),
											...(i % 4 === 3 && { borderRight: 'none' }),
										}}>
											<Stack direction="column" spacing={1.5} sx={{padding: "20px"}}>
												<Typography variant="h3" color="text.primary">
													{el.number}
												</Typography>
												<Typography variant="subtitle1" color="text.primary">
													{el.title}
												</Typography>
												<Typography variant="body1" color="text.primary">
													{el.text}
												</Typography>
											</Stack>
										</StyledGridItem>
									))
								}
							</StyledGrid>
					</StyledCard>
				</Stack>
			</StyledContainer>
		</StyledWrapper>
	)
}

export default ForexFeatures
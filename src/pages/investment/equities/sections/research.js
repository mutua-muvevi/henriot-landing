
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { FaLongArrowAltRight } from "react-icons/fa";

import { researchBlogs } from "../info";

const StyledWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.background.neutral
}))

const StyledGContainer = styled(Container)(({ theme }) => ({
	minHeight: "50vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}));

const StyledCard = styled(Card)(({ theme }) => ({
	
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}))

const StyledGridItem = styled(Grid)(({ theme }) => ({
	
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({

}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({

}))

const EquityResearch = () => {


	return (
		<StyledWrapper>
			<StyledGContainer maxWidth="lg">
				<Stack textAlign="left">
					<Typography
						textAlign="left"
						variant="h3"
						color="text.primary"
						sx={{marginBottom:"30px",}}
					>
						Related Research
					</Typography>
				</Stack>

				<StyledGrid container spacing={3}>
					{
						researchBlogs.map((blog, i) => (
							<StyledGridItem key={i} item xs={12} sm={12} md={6} lg={4} xl={4}>
								<StyledCard>
									<StyledCardContent>
										<Stack direction="column" spacing={2}>
											<Typography variant="body1" color="text.secondary">
												By {blog.author}
											</Typography>
											<StyledCardMedia
												height={200}
												component="img"
												src={blog.image}
												alt={blog.title}
											/>
											<Typography variant="body1" color="text.secondary">
												{blog.category}
											</Typography>
											<Typography variant="body1" color="text.secondary">
												<span style={{color:"#000000"}}>Tags</span> : {
													blog.tags.map((tg, i) => <span key={i} style={{marginRight: "5px"}}>{tg}</span> )
												}
											</Typography>
											<Button variant="contained" color="primary" endIcon={
												<FaLongArrowAltRight/>
											}>
												See more
											</Button>
										</Stack>
									</StyledCardContent>
								</StyledCard>
							</StyledGridItem>
						))
					}
				</StyledGrid>
			</StyledGContainer>
		</StyledWrapper>
	)
}


export default EquityResearch
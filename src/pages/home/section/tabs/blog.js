import React from 'react';

import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { sentenceCase } from "change-case";

import { researchCenter } from "../../info";


const Wrapper = styled(Box)(({ theme }) => ({

}))

const StyledGrid = styled(Grid)(({ theme }) => ({
	marginBottom: "30px",
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({
	height: 450
}))

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
	borderTopLeftRadius: "5px",
	borderTopRightRadius: "5px"
}))

const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
	height: "100%"
}))

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	height: 200
}))

const StyledTag = styled(Box)(({ theme }) => ({
	border: "1px solid grey",
	borderRadius: theme.shape.borderRadius,
	paddingLeft: "5px",
	paddingRight: "5px",
	paddingTop: "5px",
	paddingBottom: "5px"
}))


const BlogTab = () => {
	
	const viewCard = () => {
		console.log("Something happened")
	}

	return (
		<Wrapper>
			<StyledGrid container spacing={3}>
				{
					researchCenter.map((el, i) => (
						<StyledGridItem item key={i} xs={12} sm={12} md={6} lg={4} xl={4}>
							<StyledCard>
								<StyledCardActionArea onClick={viewCard}>
									<StyledCardMedia
										component="img"
										src={el.image}
										alt={el.title}
										height={250}
									/>

									<StyledCardContent>
										<Stack
											direction="column"
											spacing={3}
										>

											<Stack direction="column" spacing={1.5}>
												<Typography variant="body2" color="primary">
													{sentenceCase(el.category)}
												</Typography>
												<Typography variant="subtitle1" color="text.primary">
													{sentenceCase(el.title)}
												</Typography>
											</Stack>

											<Stack
												direction="row"
												spacing={1.5}
												justifyContent="flex-start"
											>
												{
													el.tags.map((tag, i) => (
														<StyledTag key={i} >
															<Typography variant="caption" color="text.secondary">
																{tag}
															</Typography>
														</StyledTag>
													))
												}
											</Stack>
										</Stack>
									</StyledCardContent>
								</StyledCardActionArea>
							</StyledCard>
						</StyledGridItem>	
					))
				}
			</StyledGrid>
		</Wrapper>
	)
}

export default BlogTab
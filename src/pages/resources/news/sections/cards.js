import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { articles } from "../info"
import { truncate } from "../../../../utils/stringMethods";
import { useTheme } from "@emotion/react";

const StyledWrapper = styled(Container)(({ theme }) => ({
	paddingTop: "30px",
	paddingBottom: "30px"
}))

const ArticleCards = () => {
	const theme = useTheme();

	return (
		<StyledWrapper maxWidth="lg">
			<Grid container spacing={3}>
				{
					articles.map((el, i) => (
						<Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={i}>
							<Card>
								<CardActionArea>
									<CardMedia
										component="img"
										src={el.coverImage}
										alt={el.title}
										height={250}
									/>
									<CardContent>
										<Stack direction="column" spacing={2}>
											<Typography variant="h5">
												{ truncate(el.title, 30) }
											</Typography>
											<Typography variant="subtitle2" color="text.secondary">
												{ truncate(el.blocks[0].paragraphs[0], 130)}
											</Typography>
											<Typography variant="subtitle2" color="text.secondary">
												<span style={{color: theme.palette.text.primary}}>
													Estimated Read time : 
												</span>
												{ el.estimatedReadTime }
											</Typography>
											<Typography variant="subtitle2" color="text.secondary">
												<span style={{color: theme.palette.text.primary}}>
													Tags : 
												</span>
												{ truncate(el.tagline, 30) }
											</Typography>
										</Stack>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					))
				}
			</Grid>
		</StyledWrapper>
	)
}

export default ArticleCards
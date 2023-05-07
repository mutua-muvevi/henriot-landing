import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { articles } from "../info"
import { truncate } from "../../../../utils/stringMethods";
import { useTheme } from "@emotion/react";
import { selectData } from "../../../../redux/action/article";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const StyledWrapper = styled(Container)(({ theme }) => ({
	paddingTop: "30px",
	paddingBottom: "30px"
}))

const ArticleCards = ({ setData }) => {
	const theme = useTheme();
	const navigate = useNavigate()

	const handleSelect = (article) => {
		setData(article)
		navigate("/landing/resources/news/single")
	}

	return (
		<StyledWrapper maxWidth="lg">
			<Grid container spacing={3}>
				{
					articles.map((article, i) => (
						<Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={i}>
							<Card>
								<CardActionArea onClick={() => handleSelect(article)}>
									<CardMedia
										component="img"
										src={article.coverImage}
										alt={article.title}
										height={250}
									/>
									<CardContent>
										<Stack direction="column" spacing={2}>
											<Typography variant="h5">
												{ truncate(article.title, 30) }
											</Typography>
											<Typography variant="subtitle2" color="text.secondary">
												{ truncate(article.blocks[0].paragraphs[0], 130)}
											</Typography>
											<Typography variant="subtitle2" color="text.secondary">
												<span style={{color: theme.palette.text.primary}}>
													Estimated Read time : 
												</span>
												{ article.estimatedReadTime }
											</Typography>
											<Typography variant="subtitle2" color="text.secondary">
												<span style={{color: theme.palette.text.primary}}>
													Tags : 
												</span>
												{ truncate(article.tagline, 30) }
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

const mapStateToProps = ({}) => ({})

const mapDispatchToProps = (dispatch) => ({
	setData: (article) => dispatch(selectData(article))
})

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCards)
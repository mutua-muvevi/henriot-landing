import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaQuestion } from "react-icons/fa";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom : "50px",
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}))

const StyledQuestionBox = styled(Box)(({ theme }) => ({
	height: "70px",
	width: "70px",
	borderRadius: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: theme.palette.primary.quaterOpacity,
}))

const styledIcon = {
	fontSize: "35px"
}

const ForexFAQ = ({faq}) => {
	return (
		<StyledWrapper>
			<Container maxWidth="lg">
				<Stack direction="column" spacing={5}>
					<Typography variant="h3" color="text.primary">
						FAQ
					</Typography>

					<div>
						<Grid container spacing={3}>
							{
								faq.map((el, i) => (
									<Grid item xs={12} sm={12} md={12} lg={6} xl={6} key={i}>
										<Stack direction="row" spacing={3}>
											<div>
												<StyledQuestionBox>
													<FaQuestion style={styledIcon}/>
												</StyledQuestionBox>
											</div>

											<Stack direction="column" spacing={1.5}>
												<Typography variant="h5" color="text.primary">
													{el.question}
												</Typography>
												<Typography variant="h6" color="text.secondary" sx={{fontWeight: 500}}>
													{el.answer}
												</Typography>
											</Stack>
										</Stack>
									</Grid>
								))
							}
						</Grid>
					</div>

					
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default ForexFAQ
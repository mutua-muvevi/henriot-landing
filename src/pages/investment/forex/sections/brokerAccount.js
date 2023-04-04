import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Alert, AlertTitle, Box, Card, CardContent, Container, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@emotion/react";

const StyledWrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom: "50px",
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({

}));

const StyledGridLeft = styled(Grid)(({ theme }) => ({

}));

const StyledCard = styled(Card)(({ theme }) => ({
	minHeight: "450px"
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	padding: "30px"
}));

const StyledLogoBox = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: "5px",
	// backgroundColor: theme.palette.primary.quaterOpacity,
	padding: "10px"
}));

const styledImage = {
	width: "50px",
	maxHeight: "50px"
}

const StyledGridRight = styled(Grid)(({ theme }) => ({

}));

const StyledNumberBox = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	width: "75px",
	height: "75px",
	borderRadius: "50%",
	backgroundColor: theme.palette.primary.quaterOpacity
}));


const SlickArrowLeft = (props) => {
	const { className, style, onClick, backgroundColor, color } = props;

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				backgroundColor: backgroundColor,
				color: color,
			}}
			onClick={onClick}
		/>
	)
}

const SlickArrowRight = (props) => {
	const { className, style, onClick , backgroundColor, color} = props;

	return (
		<div
			className={className}
			style={{
				...style,
				display: "block",
				backgroundColor: backgroundColor,
				color: color,
			}}
			onClick={onClick}
		/>
	)
}

const ForexBrokerAccount = ({brokerAccount}) => {
	const theme = useTheme();

	const settings = {
		centerMode: true,
		className: "center",
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: true,
		prevArrow: <SlickArrowLeft color={theme.palette.primary.main} backgroundColor={theme.palette.primary.halfOpacity}/>,
		nextArrow: <SlickArrowRight color={theme.palette.primary.main} backgroundColor={theme.palette.primary.halfOpacity}/>,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<StyledWrapper>
			<Container maxWidth="lg">
				<Stack direction="column" spacing={5}>
					<div>
						<StyledGrid container spacing={5}>
							<StyledGridLeft item xs={12} sm={12} md={12} lg={6} xl={6}>
								<Stack direction="column" spacing={3} >
									<Typography variant="h3" color="text.primary">
										Broker account
									</Typography>

									<Box sx={{mr:"20px"}}>
										<Slider {...settings}>
											{
												brokerAccount.cards.map((el, i) => (
													<Box  key={i} px={2}>
														<StyledCard>
															<StyledCardContent>
																<Stack direction="column" spacing={3}>
																	<Stack direction="row" spacing={3}>
																		<StyledLogoBox>
																			<img src={el.image} alt={el.title} style={styledImage}/>
																		</StyledLogoBox>

																		<Stack direction="column" alignItems="flex-start">
																			<Typography variant="h6" colot="text.primary">
																				{el.title}
																			</Typography>

																			<Rating  precision={0.5} name="read-only" value={el.stars} readOnly />
																		</Stack>
																	</Stack>
																	<Divider/>

																	<Stack spacing={1.5} direction="column">
																		{
																			el.items.map((item, index) => (
																				<Stack key={index} direction="row" justifyContent="space-between" alignItems="center">
																					<Typography variant="subtitle1" color="text.secondary">
																						{item.key} :
																					</Typography>
																					<Typography variant="subtitle1" color="text.primary">
																						{item.value}
																					</Typography>
																				</Stack>
																			))
																		}
																	</Stack>
																</Stack>
															</StyledCardContent>
														</StyledCard>
													</Box>
												))
											}
										</Slider>
									</Box>

								</Stack>
							</StyledGridLeft>

							<StyledGridRight item xs={12} sm={12} md={12} lg={6} xl={6}>
								<Stack direction="column" spacing={3} >
									<Typography variant="h3" color="text.primary">
										How to join
									</Typography>

									{
										brokerAccount.join.steps.map((el, i) => (
											<Stack direction="column" spacing={1.5}>
												<StyledNumberBox>
													<Typography variant="h5" color="text.primary">
														{1 + i}
													</Typography>
												</StyledNumberBox>

												<Typography variant="h5" color="text.primary">
													{el.title}
												</Typography>
												<Typography variant="h6" color="text.secondary" textAlign="justify">
													{el.text}
												</Typography>
											</Stack>
										))
									}
								</Stack>
							</StyledGridRight>
						</StyledGrid>
					</div>

					<Alert severity="info">
						<AlertTitle>
							<Typography variant="h5" color="primary">
								{brokerAccount.bottom.title}
							</Typography>
						</AlertTitle>

						<Typography variant="h6" color="text.secondary" sx={{fontWeight: 500}}>
							{brokerAccount.bottom.text}
						</Typography>
					</Alert>
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default ForexBrokerAccount
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTheme } from "@emotion/react";
import { FcBusinessman } from "react-icons/fc";

const Wrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	paddingBottom : "50px",
	minHeight: "60vh",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	backgroundColor: theme.palette.background.neutral
}));

const StyledIconBox = styled(Box)(({ theme }) => ({
	height: "70px",
	width: "70px",
	borderRadius: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: theme.palette.primary.quaterOpacity,
}))

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


const iconStyle = {
	fontSize: "50px"
}

const ForexReviews = ({ reviews }) => {
	const theme = useTheme();

	const settings = {
		className: "center",
		centerMode: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
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
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
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
		<Wrapper>
			<Container maxWidth="lg">
				<Stack direction="column" spacing={5}>
					<Typography variant="h3" color="text.primary">
						Reviews
					</Typography>

					<Slider {...settings}>
						{reviews.map((review, index) => (
							<div key={index}>
								<Box key={index} px={2}>
									<Card>
										<CardContent>
											<Stack direction="column" spacing={3}>
												<Stack direction="row" spacing={3}>
													<StyledIconBox>
														<FcBusinessman style={iconStyle} />
													</StyledIconBox>

													<Stack direction="column" spacing={1}>
														<Typography variant="h4">{review.name}</Typography>
														<Typography variant="subtitle1">
															{review.location}
														</Typography>
													</Stack>

												</Stack>
												<Typography variant="h6" color="text.secondary">{review.text}</Typography>
											</Stack>
										</CardContent>
									</Card>

								</Box>
							</div>
						))}
					</Slider>
					<Typography variant="subtitle1" color="text.primary" sx={{fontWeight: 500}}>
						*Some of the reviews have been modified for gramma and spelling. 
					</Typography>
				</Stack>
			</Container>
		</Wrapper>
	);
};

export default ForexReviews;

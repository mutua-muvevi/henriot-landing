import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Wrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	padingBottom : "50px",
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

const styledIcon = {
	fontSize: "20px"
}

const Arrow = styled(Box)(({ theme }) => ({
	cursor: "pointer",
}));

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
	<Arrow {...props}>
		<FaChevronLeft size={32} style={styledIcon}/>
	</Arrow>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
	<Arrow {...props}>
		<FaChevronRight size={32} style={styledIcon}/>
	</Arrow>
);

const ForexReviews = ({ reviews }) => {
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
		prevArrow: <SlickArrowLeft />,
		nextArrow: <SlickArrowRight />,
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
			<Container maxWidth="xl">
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
														{review.icon}
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
				</Stack>
			</Container>
		</Wrapper>
	);
};

export default ForexReviews;

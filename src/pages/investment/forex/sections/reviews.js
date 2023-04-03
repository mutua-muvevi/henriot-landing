import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled(Box)(({ theme }) => ({
	paddingTop: "50px",
	padingBottom : "50px"
}))

const ReviewWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	textAlign: "center",
	margin: "10px",
	padding: "20px",
	boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
}));

const ForexReviews = ({ reviews }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 10000,
	};

	return (
		<Wrapper>
			<Container maxWidth="xl">
				<Slider {...settings}>
					{reviews.map((review, index) => (
						<ReviewWrapper key={index}>
							
							<Typography variant="h5">{review.name}</Typography>
							<Typography variant="subtitle1">
								{review.location}
							</Typography>
							<Typography variant="body1">{review.text}</Typography>
						</ReviewWrapper>
					))}
				</Slider>
			</Container>
		</Wrapper>
	);
};

export default ForexReviews;

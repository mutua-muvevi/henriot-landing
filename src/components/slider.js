import { Card, CardContent, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledCard = styled(Card)(({ theme }) => ({
	marginRight: 3
}))

const ReusableCardSlider = ({ data }) => {
	const settings = {
		className: "center",
		dots: true,
		infinite: true,
		speed: 500,
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
		
	};

	return (
		<Slider {...settings}>
			{console.log(data)}
			{data.map((item, index) => (
				<StyledCard>
					<CardContent>
						<Stack direction="column" spacing={1.5}>
							<Typography variant="h5">{item.name}</Typography>
							<Typography variant="subtitle1">
								{item.location}
							</Typography>
							<Typography variant="h6" color="text.secondary">{item.text}</Typography>
						</Stack>
					</CardContent>
				</StyledCard>
			))}
		</Slider>
	)
}

export default ReusableCardSlider
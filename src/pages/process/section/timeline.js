import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { timelineItems } from "../info";
import { useTheme } from '@emotion/react';

const StyledProcessTimeline = styled(Box)(({ theme }) => ({
	
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	
}))

const timelineStyle = {
	backgrounsColoe: "red",
	width: "100% !important"
}

const ProcessTimeline = () => {
	const theme = useTheme()

	const iconStyleBox = {
		backgroundColor: theme.palette.primary.main,
		color: "#fff"
	}

	return (
		<StyledProcessTimeline>
			<StyledContainer maxWidth="xl">
				<Stack
					direction="column"
					alignItems="stretch"
					justifyContent="center"
				>
					<VerticalTimeline
						layout="1-column-left"
						style={timelineStyle}
					>
						{
							timelineItems.map((el, i) => (
								<VerticalTimelineElement
									key={i}
									iconStyle={iconStyleBox}
									icon={el.icon}
									contentStyle={el.contentStyle}
									contentArrowStyle={el.arrowStyle}
								>
									<Stack>
										<Typography variant="h5" color="text.primary">
											{el.title}
										</Typography>
										{
											el.paragraphs.map((p, index) => (
												<Typography variant="body1" color="text.primary" key={index}>
													{p}
												</Typography>
											))
										}
									</Stack>
								</VerticalTimelineElement>
							))
						}
					</VerticalTimeline>
				</Stack>
			</StyledContainer>
		</StyledProcessTimeline>
	)
}

export default ProcessTimeline
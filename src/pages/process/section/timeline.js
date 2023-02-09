import { Box, Container, Typography } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from "@mui/lab";
import { styled } from "@mui/system";

import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { timelineItems } from "../info";

const StyledProcessTimeline = styled(Box)(({ theme }) => ({
	
}))

const StyledContainer = styled(Container)(({ theme }) => ({
	
}))
const imageStyles = {
	width: "100px",
	height: "100px",
	borderRadius: "4px"
}

const styledIcon = {
	color: "#3366FF",
	fontSize: "20px"
}


const ProcessTimeline = () => {
	return (
		<StyledProcessTimeline>
			<StyledContainer maxWidth="xl">

				<Timeline
					sx={{
					[`& .${timelineItemClasses.root}:before`]: {
						flex: 0,
						padding: 0,
					},
					}}
					position="alternate"
				>
					{
						timelineItems ?
						timelineItems.map((el, i) => (
							<TimelineItem key={i}>
								<TimelineSeparator sx={{mt:"-10px"}}>
									<TimelineDot>
										<BsFillFileEarmarkPdfFill style={styledIcon}/>
									</TimelineDot>
									<TimelineConnector sx={{mt:"-10px"}} />
								</TimelineSeparator>
								<TimelineContent>
									<Typography variant="subtitle2" color="text.primary">
										{el.title}
									</Typography>
									<Typography variant="body2" color="text.secondary" gutterBottom>
										{el.text}
									</Typography>
								</TimelineContent>
							</TimelineItem>
						))
						: "Loading"
					}
				</Timeline>
			</StyledContainer>
		</StyledProcessTimeline>
	)
}

export default ProcessTimeline
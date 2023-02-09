import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { sentenceCase } from "change-case";

const title = "Henriot’s Investment Process Is Powered By An Open Research Ecosystem";
const paragraph = "Kennedy, CEO, and CIO of Henriot, who serves as the company's chief investment officer, make investment choices assisted by the director of Research. Henriot's analytic team and research methodology are overseen by Kennedy, with whom they have collaborated for over 5 years. Rather than focusing on a single industry or region, Henriot's experts are organized around cross-sector innovation topics. To take advantage of technological convergence, analysts work together on specific topics and across them."
const videoLink = "https://res.cloudinary.com/dqweh6zte/video/upload/v1675896492/henriot/pexels-tima-miroshnichenko-7578639_eklyoh.mp4";


const StyledVideoText = styled(Box)(({ theme }) => ({
		minHeight: "60vh",
	backgroundColor: theme.palette.background.neutral
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	paddingTop: "30px",
	paddingBottom: "30px",
	display: "flex",
	flexDirection:"column",
	alignItems: "center",
	justifyContent: "center"
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	justifyContent: "center",
	marginTop: "30px"
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({

}));


const styledVideo = {
	objectFit: "cover",
	width: "80%",
	borderRadius: "10px"
}

const VideoText = () => {
	return (
		<StyledVideoText>
			<StyledContainer maxWidth="xl">
				<StyledGrid container spacing={3}>
					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<Stack direction="column" spacing={2}>
							<Typography variant="h3" color="text.secondary">
								{sentenceCase(title)}
							</Typography>

							<Typography variant="body1" color="text.secondary">
								{sentenceCase(paragraph)}
							</Typography>
						</Stack>
					</StyledGridItem>
					<StyledGridItem item xs={12} sm={12} md={12} lg={6} xl={6}>
						<video style={styledVideo} autoPlay loop controls="" muted>
							<source  src={videoLink} type="video/mp4"/>
							<Typography variant="h5">
								Your browser does not support HTML video.
							</Typography>
						</video>
					</StyledGridItem>
				</StyledGrid>
			</StyledContainer>
		</StyledVideoText>
	)
}

export default VideoText

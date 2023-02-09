import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { paragraphSection } from "../info";


const backgroundImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675816765/henriot/yiorgos-ntrahas-mcAUHlGirVs-unsplash_zos69m.jpg"

const StyledTitleParagraph = styled(Box)(({ theme }) => ({
	backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.57)), url(${backgroundImage})`,
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "60vh",
	color: "#fff",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	textAlign: "center",
	alignItems: "center",
}));
const TitleParagraph = () => {
	return (
		<StyledTitleParagraph>
			<StyledContainer maxWidth="xl">
				<Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
					<Stack direction="column" justifyContent="center" spacing={1.5}>
						<Typography variant="h2">	
							Henriot Incorporates Sustainability Intrinsically
						</Typography>
						{
							paragraphSection.map((el, i) => (
								<Typography key={i} variant="subtitle1">
									{el}
								</Typography>
							))
						}
					</Stack>
					<Button variant="contained" sx={{width:"250px"}}>
						Learn More
					</Button>
				</Stack>
			</StyledContainer>
		</StyledTitleParagraph>
	)
}

export default TitleParagraph
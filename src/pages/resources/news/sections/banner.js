import { Box, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

const image = "https://res.cloudinary.com/dqweh6zte/image/upload/v1675948809/henriot/pexels-anna-nekrashevich-6801647_iogcmm.jpg"

const StyledWrapper = styled(Box)(({ theme }) => ({
	height: "40vh",
	background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${image})`,
	backgroundAttachment: "fixed",
	backgroundSize: "cover",
	backgroundPosition: "bottom",
	paddingBottom: "30px"
}))

const NewsBanner = () => {
	return (
		<StyledWrapper>
			<Container maxWidth="lg" sx={{height: "100%"}}>
				<Stack direction="column" justifyContent="flex-end" sx={{height: "100%"}}>
					<Typography variant="h1" sx={{color: "#fff"}}>
						Articles
					</Typography>
				</Stack>
			</Container>
		</StyledWrapper>
	)
}

export default NewsBanner
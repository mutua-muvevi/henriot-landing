import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { sentenceCase } from "change-case";

const ReUsableImageBanner = ({ image, title, paragraph, minHeight, buttonAction, buttonText, buttonWidth }) => {
	
	const StyledReUsableImageBanner = styled(Box)(({ theme }) => ({
		backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.47), rgba(0, 0, 0, 0.57)), url(${image})`,
		backgroundAttachment: "fixed",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	}));

	const StyledContainer = styled(Container)(({ theme }) => ({
		height: minHeight ? minHeight : "60vh",
		color: "#fff",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "center"
	}))
	
	const StyledStack = styled(Stack)(({ theme }) => ({
		height: "100%",
		width: "100%"
	}));

	const StyledButton = styled(Button)(({ theme }) => ({
		width : buttonWidth ? buttonWidth : "200px"
	}))

	return (
		<StyledReUsableImageBanner>
			<StyledContainer maxWidth="xl">
				<StyledStack
					direction="column"
					alignItems="flex-start"
					justifyContent="center"
					textAlign="left"
					spacing={3}
				>
					<Typography variant="h2">
						{sentenceCase(title)}
					</Typography>
					<Typography variant="h4">
						{ paragraph ? sentenceCase(paragraph) : null}
					</Typography>
					{
						buttonText ? (
							<StyledButton variant="contained" onClick={buttonAction}>
								{buttonText}
							</StyledButton>
						) : null
					}
				</StyledStack>
			</StyledContainer>
		</StyledReUsableImageBanner>
	)
}

export default ReUsableImageBanner

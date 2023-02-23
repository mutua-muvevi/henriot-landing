import React from 'react';

import { Box, Button, Card, CardContent, Container, Divider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';



import { disclaimer } from "./info";
import { Link } from 'react-router-dom';

const backgroundImage = "https://res.cloudinary.com/dqweh6zte/image/upload/v1677065110/henriot/pexels-nextvoyage-897232_lmamoi.jpg";

const StyledWelcomePage = styled(Box)(({theme}) => ({
	backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.39)), url(${backgroundImage})`,
	backgroundSize: "cover",
	backgroundRepeat:"no-repeat",
	backgroundAttachment: "fixed",
	backgroundPosition: "center"
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	width: "100%",
	minHeight: "100vh",
}));

const StyledContainer = styled(Container)(({ theme }) => ({
	minHeight: "100vh",
}));

const StyledCard = styled(Card)(({ theme }) => ({
	maxWidth: "500px",
	marginTop: "10vh"
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
	padding: "20px"
}));

const StyledItemStack = styled(Stack)(({ theme }) => ({
	height: "30vh",
	overflowY: "scroll",

}));

const StyledButtonSection = styled(Box)(({ theme }) => ({
	paddingTop: "20px"
}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "300px"
}));

const linkStyles = {
	color: "inherit",
	txtDecoration: "none"
}


const WelcomePage = () => {
	return (
		<StyledWelcomePage>
			<StyledStack justifyContent="center" alignItems="flex-start">
				<StyledContainer maxWidth="lg">
					<StyledCard>
						<StyledCardContent>
							<StyledItemStack direction="column" spacing={3}>
								<Stack direction="column" spacing={2} textAlign="center">

									<Typography variant="h5" color="text.primary">
										" HG"	
									</Typography>

									<Typography variant="h5" color="text.primary">
										(the “Company”)
									</Typography>

									<Typography variant="h5" color="text.primary">
										Please read the disclaimer below carefully. You must accept its terms before you can proceed.
									</Typography>
								</Stack>

								{
									disclaimer.body.map((body, index) => (
										<Stack key={index} direction="column" spacing={1.5}>
											<Typography variant="subtitle1" color="text.primary">
												{body.title}
											</Typography>
											{
												body.paragraphs.map((paragraph, i) => (
													<Typography key={i} variant="body1" color="text.primary">
														{paragraph}
													</Typography>
												))
											}
										</Stack>
									))
								}

							</StyledItemStack>
							
							<StyledButtonSection>
								<Link to="/landing/main" style={linkStyles}>
									<StyledButton variant="contained">
										Accept and enter
									</StyledButton>
								</Link>
							</StyledButtonSection>
						</StyledCardContent>
					</StyledCard>
				</StyledContainer>

			</StyledStack>
		</StyledWelcomePage>
	)
}

export default WelcomePage
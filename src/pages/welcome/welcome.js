import React from 'react';

import { Box, Button, Card, CardContent, Container, Divider, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import { BsChevronRight } from "react-icons/bs"

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
	padding: "10px"
}));

const StyledItemStack = styled(Stack)(({ theme }) => ({

}));

const StyledParagraphStack = styled(Stack)(({ theme }) => ({
	height: "20vh",
	overflowY: "scroll",
	width: "100%"

}));

const StyledButtonSection = styled(Box)(({ theme }) => ({
	width: "100%",
	borderTop: "1px solid #000000",
	padding: "10px"
}));

const StyledButton = styled(Button)(({ theme }) => ({
	width: "100%",
	padding: "15px"
}));

const linkStyles = {
	color: "inherit",
	textDecoration: "none"
}


const WelcomePage = () => {
	return (
		<StyledWelcomePage>
			<StyledStack justifyContent="center" alignItems="flex-start">
				<StyledContainer maxWidth="lg">
					<StyledCard>
						<StyledCardContent>
							<StyledItemStack direction="column" spacing={3}>
								<Stack direction="column" spacing={1} textAlign="center">

									<Typography variant="h5" color="text.primary">
										Welcome to Henriot Investment Management, 
									</Typography>

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

								<StyledParagraphStack spacing={3}>

									{
										disclaimer.body.map((body, index) => (
											<Stack key={index} direction="column" spacing={1.5}>
												<Typography variant="subtitle1" color="text.primary">
													{body.title}
												</Typography>
												{
													body.paragraphs.map((paragraph, i) => (
														<Typography style={{fontWeight: "bolder"}} key={i} variant="body1" color="text.secondary">
															{paragraph}
														</Typography>
													))
												}
											</Stack>
										))
									}
								</StyledParagraphStack>

							</StyledItemStack>
							
						</StyledCardContent>
						<Stack>
							<StyledButtonSection>
								<Link to="/landing/main" style={linkStyles}>
									<StyledButton
										variant="contained"
										endIcon={<BsChevronRight/>}
									>
										Accept and enter site
									</StyledButton>
								</Link>
							</StyledButtonSection>
						</Stack>
					</StyledCard>
				</StyledContainer>

			</StyledStack>
		</StyledWelcomePage>
	)
}

export default WelcomePage
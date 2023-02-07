import { Box, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

import Logo from "../assets/logo/White on Transparent.png";
import { footerHenriotContacts, footerInvestmentOptions, privacyPolicy, termsAndCondition } from "./info";

const StyledFooter = styled(Box)(({ theme }) => ({
	backgroundColor: "#000000",
	color:"#fff"
}));

const StyledTopContainer = styled(Container)(({ theme }) => ({
	minHeight: "50vh",
	display: "flex",
	flexDirection:"column",
	justifyContent: "center",
	paddingTop: "20px",
	paddingBottom: "20px",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
	
}));

const StyledGridItem = styled(Grid)(({ theme }) => ({
	
}));

const StyledLeftStack = styled(Stack)(({ theme }) => ({
	
}));

const StyledLogoSection = styled(Stack)(({ theme }) => ({
	marginBottom: "30px"
}));

const styledLogoImage = {
	maxWidth: "200px"
}

const styledLink = {
	textDecoration: "none",
	color: "inherit"
}

const StyledBottomContainer = styled(Container)(({ theme }) => ({
	minHeight: "5vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
}));

const Footer = () => {
	return (
		<StyledFooter>
			<StyledTopContainer maxWidth="xl">
				<StyledLogoSection
					justifyContent="flex-start"
				>
					<img
						src={Logo}
						alt="Henriot Logo"
						style={styledLogoImage}
					/>
				</StyledLogoSection>
				<StyledGrid container spacing={3}>
					<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
						<StyledLeftStack direction="column"spacing={3}>

							<Stack direction="column" spacing={1.5}>
								<Typography variant="h4" >
									Henriot Investment Management Ltd
								</Typography>
								<Stack direction="column" spacing={1}>
									{
										footerHenriotContacts.map((el, i) => (
											<Typography variant="body1" key={i}>
												{el}
											</Typography>
										))
									}
								</Stack>
							</Stack>

							<Stack direction="column" spacing={1.5}>
								<Typography variant="h4" >
									Investment Funds
								</Typography>
								<Stack direction="column" spacing={1}>
									{
										footerInvestmentOptions.map((el, i) => (
											<Link to={el.path} style={styledLink} key={i}>
												<Typography variant="body1">
													{el.label}
												</Typography>
											</Link>
										))
									}
								</Stack>
							</Stack>
						</StyledLeftStack>
					</StyledGridItem>

					<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
						<Stack direction="column" spacing={1.5}>
							<Typography variant="h4">
								Terms and conditions
							</Typography>
							{
								termsAndCondition.map((el, i) => (
									<Typography variant="body1" key={i}>
										{el}
									</Typography>
								))
							}
						</Stack>
					</StyledGridItem>

					<StyledGridItem item xs={12} sm={12} md={12} lg={4} xl={4}>
						<Stack direction="column" spacing={1.5}>
							<Typography variant="h4">
								Privacy Policy | Client Agreement
							</Typography>
							{
								privacyPolicy.map((el, i) => (
									<Typography variant="body1" key={i}>
										{el}
									</Typography>
								))
							}							
						</Stack>
					</StyledGridItem>
				</StyledGrid>
			</StyledTopContainer>

			<Divider/>

			<StyledBottomContainer>
				<Typography variant="caption">
					Copyright 2023 by Henriot Investment Management Ltd
				</Typography>
			</StyledBottomContainer>
		</StyledFooter>
	)
}

export default Footer